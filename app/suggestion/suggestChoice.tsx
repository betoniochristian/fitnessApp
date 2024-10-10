// app/(tabs)/index.tsx

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useRouter} from 'expo-router';
import Svg, { Path } from 'react-native-svg';
import runningImage from '../../assets/icon/dumbbell.png';
import weightImage from '../../assets/images/rsz_1lifting.png';
import absIcon from '../../assets/icon/abs.png';
import { Dimensions } from 'react-native';



export default function SuggestChoice() {
  const router = useRouter();
  
  return (
    <View style={styles.container}>
      <View style={styles.content}>

      <View style={styles.curvedBackground}>
      <Svg
        height="200"
        width="100%"
        style={styles.svg}
        viewBox="0 0 1440 320"
      >
        <Path
          fill="#1a2a6c" 
          d="M0,128L30,133.3C60,139,120,149,180,170.7C240,192,300,224,360,245.3C420,267,480,277,540,240C600,203,660,117,720,90.7C780,64,840,96,900,106.7C960,117,1020,107,1080,90.7C1140,75,1200,53,1260,64C1320,75,1380,117,1410,138.7L1440,160L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
        />
      </Svg>
    </View>


        <View style={styles.textStyle}>
          <Text style={styles.title}>Choose Your Workout Level</Text>
        </View>

        <TouchableOpacity style={styles.button1} onPress={() => router.push('/suggestion/suggest')}>
        <Image source={absIcon} style={styles.image1} />
            <View style={styles.textmsg}>
              <Text style={styles.buttonText}>Beginner</Text>
              <Text style={styles.buttonText5}>Start your fitness journey with foundational exercises and tips.</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button2} onPress={() => router.push('/suggestion/suggestInter')}>
        <View style={styles.textmsg1}>
              <Text style={styles.buttonText4}>Intermediate</Text>
              <Text style={styles.buttonText5}>Take your workouts up a notch.</Text>
            </View>
        <Image source={runningImage} style={styles.image2} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button1} onPress={() => router.push('/suggestion/suggestAdv')}>
        <Image source={weightImage} style={styles.image1} />
            <View style={styles.textmsg}>
              <Text style={styles.buttonText}>Advanced</Text>
              <Text style={styles.buttonText5}>Challenge yourself with high-intensity workouts.</Text>
            </View>
        </TouchableOpacity>
        
      </View>

    </View>
  );
}
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  textStyle: {
    marginLeft: width * 0.05, 
    marginTop: height * 0.04, 
  },
  user: {
    fontWeight: 'bold',
  },
  title: {
    fontSize: width * 0.085, 
    color: 'white',
  },
  subtitle: {
    fontSize: width * 0.05,
    marginTop: height * 0.02, 
    color: 'white',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
  },
  curvedBackground: {
    position: 'absolute',
    width: '100%',
    height: '58%',
    top: 0,
    backgroundColor: '#1a2a6c',
  },
  svg: {
    position: 'absolute',
    bottom: -140,
  },
  button1: {
    backgroundColor: '#7c73e6',
    marginTop: height * 0.03, 
    height: height * .2, 
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
    marginTop: height * 0.03,
    height: height * 0.2, 
    padding: 30,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginHorizontal: width * 0.05, 
    shadowColor: '#000',
        shadowOffset: {
        width: 0,
        height: 6,
        },
        shadowOpacity: 0.4,
        shadowRadius: 8,
        elevation: 10,
  },
  button3: {
    backgroundColor: '#7c73e6',
    marginTop: height * 0.03,
    height: height * 0.2, 
    padding: 30,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginHorizontal: width * 0.05, 
    shadowColor: '#000',
        shadowOffset: {
        width: 0,
        height: 6,
        },
        shadowOpacity: 0.4,
        shadowRadius: 8,
        elevation: 10,
  },
  image1: {
    flex: 1,
    height: height * 0.2, 
    marginRight: -20,
  },
  image2: {
    flex: 1,
    height: height * 0.2, 
  },
  textmsg: {
    flexDirection: 'column',
    width: width * 0.45,
    marginRight: 10,
  },
  textmsg1: {
    flexDirection: 'column',
    width: width * 0.35,
  },
  textmsg2: {
    flexDirection: 'column',
    width: width * 0.40,
    marginRight: 5,
  },
  buttonText: {
    fontSize: width * 0.08, 
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  buttonText4: {
    width: width * 1,
    fontSize: width * 0.08, 
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  buttonText1: {
    fontSize: width * 0.06, 
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  buttonText5: {
    color: '#E0E0E0',
  },
});
