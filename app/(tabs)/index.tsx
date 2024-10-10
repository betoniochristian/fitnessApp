import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, useColorScheme } from 'react-native';
import { Colors } from '@/constants/Colors';
import { useRouter } from 'expo-router';
import Svg, { Path } from 'react-native-svg';
import runningImage from '../../assets/images/rsz_11running.png';
import weightImage from '../../assets/images/rsz_1lifting.png';
import bikingImage from '../../assets/images/rsz_1biking.png';
import { Dimensions } from 'react-native';

export default function HomeScreen() {
  const router = useRouter();
  const colorScheme = useColorScheme(); 
  const isDarkMode = colorScheme === 'dark';
  const currentColors = isDarkMode ? Colors.dark : Colors.light; 

  return (
    <View style={styles.container}>
      <View style={[styles.content, { backgroundColor: currentColors.background}]}>
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
          <Text style={[styles.title, { color: currentColors.header }]}>
            Hello, <Text style={styles.user}>User!</Text>
          </Text>
          <Text style={[styles.subtitle, { color: currentColors.header }]}>Choose your workout.</Text>
        </View>

        <TouchableOpacity
          style={[styles.button1, { backgroundColor: currentColors.tint }]}
          onPress={() => router.push('/workout/Running')}
        >
          <Image source={runningImage} style={styles.image1} />
          <View style={styles.textmsg}>
            <Text style={[styles.buttonText, { color: currentColors.text }]}>Running</Text>
            <Text style={[styles.buttonText5, { color: currentColors.text2 }]}>
              Track your runs and monitor your progress here.
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button2, { backgroundColor: currentColors.tint }]}
          onPress={() => router.push('/workout/Weightlifting')}
        >
          <View style={styles.textmsg1}>
            <Text style={[styles.buttonText, { color: currentColors.text }]}>Lifting</Text>
            <Text style={[styles.buttonText5, { color: currentColors.text2 }]}>
              Learn lifting techniques and track your strength progress.
            </Text>
          </View>
          <Image source={weightImage} style={styles.image2} />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button3, { backgroundColor: currentColors.tint }]}
          onPress={() => router.push('/workout/Biking')}
        >
          <Image source={bikingImage} style={styles.image3} />
          <View style={styles.textmsg2}>
            <Text style={[styles.buttonText, { color: currentColors.text }]}>Biking</Text>
            <Text style={[styles.buttonText5, { color: currentColors.text2 }]}>
              Track your biking speed and performance here.
            </Text>
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
    marginTop: height * 0.08,
  },
  user: {
    fontWeight: 'bold',
  },
  title: {
    fontSize: width * 0.085,
  },
  subtitle: {
    fontSize: width * 0.05,
    marginTop: height * 0.02,
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
    marginTop: height * 0.03,
    height: height * 0.2,
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
    height: height * 0.25,
    marginTop: height * 0.06,
    marginRight: -20,
  },
  image2: {
    flex: 1,
    height: height * 0.2,
  },
  image3: {
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
    width: width * 0.4,
    marginRight: 5,
  },
  buttonText: {
    fontSize: width * 0.08,
    fontWeight: 'bold',
  },
  buttonText5: {
    fontSize: width * 0.04,
  },
});
