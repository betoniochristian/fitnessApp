import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Alert, TouchableOpacity, PermissionsAndroid, Platform, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Pedometer } from 'expo-sensors';
import * as Location from 'expo-location';
import MapView, { Polyline, Marker } from 'react-native-maps';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Dimensions } from 'react-native';
import { useRouter} from 'expo-router';

export default function BikingScreen() {
  const router = useRouter();
  const [isRunning, setIsRunning] = useState(false);
  const [calories, setCalories] = useState<number | null>(null);
  const [stepCount, setStepCount] = useState<number>(0);
  const [location, setLocation] = useState<Location.LocationObjectCoords | null>(null);
  const [coordinates, setCoordinates] = useState<{ latitude: number; longitude: number }[]>([]);
  const [elapsedTime, setElapsedTime] = useState<number>(0);
  const [speed, setSpeed] = useState<number | null>(null);  // New state for speed

  const mapRef = useRef<MapView>(null);
  const AVERAGE_STEP_LENGTH = 0.00078; // Average step length in kilometers

  const requestPermissions = async () => {
    const { status: locationStatus } = await Location.requestForegroundPermissionsAsync();

    if (Platform.OS === 'android' && Platform.Version >= 29) {
      const activityStatus = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACTIVITY_RECOGNITION,
        {
          title: 'Activity Recognition Permission',
          message: 'This app needs access to your activity recognition',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        }
      );

      if (locationStatus !== 'granted' || activityStatus !== PermissionsAndroid.RESULTS.GRANTED) {
        Alert.alert('Permission denied', 'Please enable location permissions in settings.');
        return;
      }
    }
  };

  useEffect(() => {
    requestPermissions();
  }, []);

  useEffect(() => {
    const checkPedometerAvailability = async () => {
      const isAvailable = await Pedometer.isAvailableAsync();
      if (!isAvailable) {
        Alert.alert('Pedometer not available', 'This device does not support the pedometer.');
      }
    };
    checkPedometerAvailability();
  }, []);

  useEffect(() => {
    let subscription: { remove: () => void } | undefined;

    if (isRunning) {
      subscription = Pedometer.watchStepCount(result => {
        setStepCount(result.steps);
        calculateCalories(result.steps); 
        calculateSpeed();  // Call calculateSpeed instead of calculatePace
      });

      trackLocation();
      startTimer(); 
    } else {
      if (subscription) {
        subscription.remove();
      }
      stopTimer();
    }

    return () => {
      if (subscription) {
        subscription.remove();
      }
      stopTimer(); 
    };
  }, [isRunning]);

  let locationSubscription: Location.LocationSubscription | null = null;
  let timerInterval: NodeJS.Timeout | null = null;

  const trackLocation = async () => {
    try {
      locationSubscription = await Location.watchPositionAsync(
        {
          accuracy: Location.Accuracy.High,
          distanceInterval: 1,
          timeInterval: 1000,
        },
        (newLocation) => {
          const { coords } = newLocation;
          setLocation(coords);
          setCoordinates((prev) => [...prev, { latitude: coords.latitude, longitude: coords.longitude }]);
        }
      );
    } catch (error) {
      console.error('Error tracking location:', error);
    }
  };

  useEffect(() => {
    return () => {
      if (locationSubscription) {
        locationSubscription.remove();
      }
    };
  }, []);

  useEffect(() => {
    if (location && mapRef.current) {
      mapRef.current.animateToRegion({
        latitude: location.latitude,
        longitude: location.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }, 1000);
    }
  }, [location]);

  const startRunning = () => {
    setIsRunning(true);
    setCalories(0);
    setStepCount(0);
    setCoordinates([]);
    setElapsedTime(0); 
    setSpeed(null); // Reset speed when starting
  };

  const stopRunning = async () => {
    setIsRunning(false);
    calculateSpeed(); // Call calculateSpeed when stopping
    await saveProgress();
  };

  const startTimer = () => {
    if (!timerInterval) {
      timerInterval = setInterval(() => {
        setElapsedTime(prev => prev + 1); 
      }, 1000);
    }
  };

  const stopTimer = () => {
    if (timerInterval) {
      clearInterval(timerInterval);
      timerInterval = null;
    }
  };

  const calculateCalories = (steps: number) => {
    const caloriesBurned = (steps * AVERAGE_STEP_LENGTH * 60);
    setCalories(caloriesBurned);
  };

  const calculateDistance = () => {
    return (stepCount * AVERAGE_STEP_LENGTH).toFixed(2); 
  };

  const calculateSpeed = () => {
    const distance = parseFloat(calculateDistance()); 
    const timeInHours = elapsedTime / 3600; 

    if (distance > 0 && timeInHours > 0) {
      const calculatedSpeed = distance / timeInHours; 
      setSpeed(parseFloat(calculatedSpeed.toFixed(2)));
    } else {
      setSpeed(0); 
    }
  };

  const formatElapsedTime = () => {
    const minutes = Math.floor(elapsedTime / 60);
    const seconds = elapsedTime % 60;
    return `${minutes}:${seconds.toString().padStart(2, '0')}`; 
  };

  const saveProgress = async () => {
    const progress = {
      distance: calculateDistance(),
      calories,
      steps: stepCount,
      coordinates,
      speed, // Save speed instead of pace
      elapsedTime: formatElapsedTime(), 
    };

    try {
      const existingProgress = await AsyncStorage.getItem('runningProgress');
      const allProgress = existingProgress ? JSON.parse(existingProgress) : [];
      allProgress.push(progress);
      await AsyncStorage.setItem('runningProgress', JSON.stringify(allProgress));
      Alert.alert('Progress saved!', 'Your running session has been saved.');
    } catch (error) {
      console.error('Error saving progress:', error);
      Alert.alert('Error', 'Could not save your running progress.');
    }
  };

  
  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.map}
        initialRegion={{
          latitude: location ? location.latitude : 37.78825,
          longitude: location ? location.longitude : -122.4324,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Polyline coordinates={coordinates} strokeColor="blue" strokeWidth={4} />
        {location && (
          <Marker coordinate={{ latitude: location.latitude, longitude: location.longitude }} title="You are here!" />
        )}
      </MapView>
      <View style={styles.start}>

        <View style={styles.category}>
          <View style={styles.calories}>
          {calories !== null && (
            <View style={styles.calories}> 
              <Text style={styles.result}>
                {calories.toFixed(2)} 
              </Text>
              <Text>Calories</Text>
            </View>
          )}
          </View>

        <View style={styles.step}>
        <Text style={styles.result}>
          {stepCount}
        </Text>
        <Text>Step</Text>
        </View>

        <View style={styles.time}>
        <Text style={styles.result}>
           {formatElapsedTime()}
        </Text>
        <Text>Time</Text>
        </View>

        <View style={styles.kilometer}>
        <Text style={styles.result}>
          {calculateDistance()}
        </Text>
          <Text>Km</Text>
        </View>

        <View style={styles.speed}>
        <Text style={styles.result}>
          {speed || "0.00"} km/h
        </Text>
        <Text>Speed</Text>
        </View>

        </View>

        <View style={styles.button}>
          <TouchableOpacity 
            onPress={isRunning ? stopRunning : startRunning}
            accessible={true}
            accessibilityLabel={isRunning ? 'Stop running' : 'Start running'}
            accessibilityHint="Toggles the running session"
          >
            <Icon name={isRunning ? 'stop' : 'play'} size={50} color="#fff" />
          </TouchableOpacity>
        </View>

      </View>

    </View>
  );
}
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
    margin: 0,
    padding: 0,
  },
  result: {
    marginTop: height * 0.02, 
    fontSize: 20,
  },
  button: {
    height: height * 0.1, 
    width: width * 0.23, 
    marginTop: height * 0.02, 
    backgroundColor: 'red',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: '100%',
    height: height * 0.67, 
    position: 'absolute',
    top: 0,
  },
  start: {
    flexDirection: 'column',
    marginTop: height * 0.67, 
    alignItems: 'center',
    width: '100%',
    flex: 1,
    backgroundColor: '#ADD8E6',
  },
  category: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
  },
  calories: {
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: width * 0.03, 
  },
  step: {
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: width * 0.03, 
  },
  kilometer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: width * 0.03, 
  },
  speed: {
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: width * 0.03, 
  },
  time: {
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: width * 0.03, 
  },
});
