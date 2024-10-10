import React from 'react';
import { View, Text, StyleSheet, Button, ScrollView, TouchableOpacity, Image, useColorScheme} from 'react-native';
import { Colors } from '@/constants/Colors';
import { Dimensions } from 'react-native';
import { useRouter } from 'expo-router'
import Svg, { Path } from 'react-native-svg';

import runningImage from '../../assets/images/push-up.png';
import suggestImage from '../../assets/images/suggest.png';
import trackImage from '../../assets/images/deadlift.png';

export default function LiftingScreen() {
  const router = useRouter();
  const colorScheme = useColorScheme(); 
  const isDarkMode = colorScheme === 'dark';
  const currentColors = isDarkMode ? Colors.dark : Colors.light; 


  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: currentColors.header1 }]}>Weight Lifting</Text>
      <Text style={[styles.subtitle, { color: currentColors.header1 }]}>Track your lifting sessions here!</Text> 

      <TouchableOpacity style={[styles.button, { backgroundColor: currentColors.tint }]} onPress={() => router.push('/workout/library')}>
          <Image source={suggestImage} style={styles.image} />
            <View style={styles.textmsg}>
              <Text style={[styles.buttonText, { color: currentColors.text }]}>Video</Text>
              <Text style={[styles.buttonText1, { color: currentColors.text }]}>Demonstrations</Text>
              <Text style={[styles.buttonText5, { color: currentColors.text }]}>Watch videos to learn proper form and technique.</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button1, { backgroundColor: currentColors.tint }]} onPress={() => router.push('/track/TrackWeight')}>
            <View style={styles.textmsg1}>
              <Text style={[styles.buttonText2, { color: currentColors.text }]}>Track</Text> 
              <Text style={[styles.buttonText3, { color: currentColors.text }]}>Weightlifting</Text>
              <Text style={[styles.buttonText5, { color: currentColors.text }]}>Keep track of your weights, sets, and reps.</Text>
            </View>
          <Image source={trackImage} style={styles.image2} />
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button2, { backgroundColor: currentColors.tint }]} onPress={() => router.push('/suggestion/suggestChoice')}>
        <Image source={runningImage} style={styles.image1} />
        <View style={styles.textmsg}>
              <Text style={[styles.buttonText, { color: currentColors.text }]}>Workout</Text>
              <Text style={[styles.buttonText1, { color: currentColors.text }]}>Suggestion</Text>
              <Text style={[styles.buttonText5, { color: currentColors.text }]}>Get tailored workout plans based on your goals.</Text>
            </View>
        </TouchableOpacity>


      {/* 
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.section}>
          <Text style={styles.header}>Video Demonstrations</Text>
          <Text style={styles.info}>
            Watch videos to learn proper form and technique.
          </Text>
          <Button title="View Exercise Library" onPress={() => {}} />
        </View>

        <View style={styles.section}>
          <Text style={styles.header}>Log Your Lifts</Text>
          <Text style={styles.info}>
            Keep track of your weights, sets, and reps.
          </Text>
          <Button title="Log a New Workout" onPress={() => {}} />
        </View>

        <View style={styles.section}>
          <Text style={styles.header}>Workout Suggestions</Text>
          <Text style={styles.info}>
            Get tailored workout plans based on your goals.
          </Text>
          <Button title="Get Suggestions" onPress={() => {}} />
        </View>

        
      </ScrollView>
      */}

    </View>
  );
}

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  bg: {
    flex: 1,
    position: 'absolute',
    bottom: 0,
    zIndex: -1,
  },
  image4: {
    height: height * 0.5,
    width: width * 1,
    
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginTop: height * 0.05, 
  },
  subtitle: {
    fontSize: 18,
    marginTop: 10,
  },
  scrollContainer: {
    flex: 1,
    width: width,
    marginTop: 20,
  },
  section: {
    marginBottom: 20,
    padding: 15,
    borderRadius: 8,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
    elevation: 2,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  info: {
    fontSize: 16,
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#7c73e6',
    height: height * 0.2, 
    marginTop: height * 0.05,
    marginVertical: 10,
    marginHorizontal: width * 0.05, 
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    shadowColor: '#000',
        shadowOffset: {
        width: 0,
        height: 6,
        },
        shadowOpacity: 0.4,
        shadowRadius: 8,
        elevation: 10,
  },
  button1: {
    backgroundColor: '#7c73e6',
    height: height * 0.2, 
    marginVertical: 10,
    marginHorizontal: width * 0.05, 
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    shadowColor: '#000',
        shadowOffset: {
        width: 0,
        height: 6,
        },
        shadowOpacity: 0.4,
        shadowRadius: 8,
        elevation: 10,
  },
  button2: {
    backgroundColor: '#7c73e6',
    height: height * 0.2, 
    marginVertical: 10,
    marginHorizontal: width * 0.05, 
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    shadowColor: '#000',
        shadowOffset: {
        width: 0,
        height: 6,
        },
        shadowOpacity: 0.4,
        shadowRadius: 8,
        elevation: 10,
  },
  
  image: {
    flex: 1,
    height: height * 0.2, 
    marginBottom: 10,
  },
  image1: {
    flex: 1,
    height: height * 0.2, 
    marginBottom: 10,
  },
  image2: {
    flex: 1,
    height: height * 0.2,
    marginBottom: 20,
  },
  textmsg: {
    flexDirection: 'column',
    width: width * 0.45,
    marginRight: 10,
  },
  buttonText: {
    fontSize: width * 0.08, 
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  buttonText1: {
    fontSize: width * 0.06, 
    color: '#FFFFFF',
    fontWeight: 'bold',
  },

  textmsg1: {
    flexDirection: 'column',
    width: width * 0.45,
    marginLeft: 10,
  },
  buttonText2: {
    fontSize: width * 0.08, 
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  buttonText3: {
    fontSize: width * 0.06, 
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  buttonText5: {
    color: '#E0E0E0',
  },
});
