import React from 'react'
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image, ScrollView, useColorScheme} from 'react-native'
import { Colors } from '@/constants/Colors';
import { useRouter } from 'expo-router'

import chestIcon from '../../assets/icon/chest.png';
import bicepsIcon from '../../assets/icon/biceps.png';
import tricepsIcon from '../../assets/icon/triceps.png';
import backIcon from '../../assets/icon/back.png';
import absIcon from '../../assets/icon/abs.png';
import legsIcon from '../../assets/icon/legs.png';
import shouldersIcon from '../../assets/icon/shoulders.png';

export default function libraryScreen(){
    const router = useRouter();
    const colorScheme = useColorScheme(); 
    const isDarkMode = colorScheme === 'dark';
    const currentColors = isDarkMode ? Colors.dark : Colors.light; 


    return(
        <View style={styles.container}>
            <View style={styles.category}>
                 <Text style={[styles.categoryText, {color: currentColors.header1}]}>Categories</Text>
            </View>
            
        <ScrollView style={styles.scrollContent}>
 
            <TouchableOpacity style={styles.button1} onPress={() => router.push('/Choice/ChestChoice')}>
                <View style={styles.textmsg1}>
                    <Text style={styles.buttonText}>Chest</Text>
                </View>
                <Image source={chestIcon} style={styles.image1}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button2} onPress={() => router.push('/Choice/BicepsChoice')}>
                <View style={styles.textmsg1}>
                    <Text style={styles.buttonText}>Biceps</Text>
                </View>
                <Image source={bicepsIcon} style={styles.image1}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button3} onPress={() => router.push('/Choice/TricepsChoice')}>
                <View style={styles.textmsg1}>
                    <Text style={styles.buttonText}>Triceps</Text>
                </View>
                <Image source={tricepsIcon} style={styles.image1}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button4} onPress={() => router.push('/Choice/BackChoice')}>
                <View style={styles.textmsg1}>
                    <Text style={styles.buttonText}>Back</Text>
                </View>
                <Image source={backIcon} style={styles.image1}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button5} onPress={() => router.push('/Choice/AbsChoice')}>
                <View style={styles.textmsg1}>
                    <Text style={styles.buttonText}>Abs</Text>
                </View>
                <Image source={absIcon} style={styles.image1}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button6} onPress={() => router.push('/Choice/LegsChoice')}>
                <View style={styles.textmsg1}>
                    <Text style={styles.buttonText}>Legs</Text>
                </View>
                <Image source={legsIcon} style={styles.image1}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button7} onPress={() => router.push('/Choice/ShouldersChoice')}>
                <View style={styles.textmsg1}>
                    <Text style={styles.buttonText}>Shoulders</Text>
                </View>
                <Image source={shouldersIcon} style={styles.image1}/>
            </TouchableOpacity>
        </ScrollView>

        </View>
    )   
}

const { height, width } = Dimensions.get('window')
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    category: {
        marginTop: height * 0.02,
        marginLeft: width * 0.05, 
    },
    categoryText: {
        fontSize: width * 0.085, 
        color: 'black',
    },
    scrollContent:{
        padding: 10,
        marginBottom: 20,
    },
    button1: {
        backgroundColor: '#7c73e6',
        height: height * 0.2,  
        marginVertical: 10,
        marginHorizontal: width * 0.02, 
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
        backgroundColor: '#f39c12',
        height: height * 0.2, 
        marginVertical: 10,
        marginHorizontal: width * 0.02, 
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
    button3: {
        backgroundColor: '#2ecc71',
        height: height * 0.2,   
        marginVertical: 10,
        marginHorizontal: width * 0.02, 
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
    button4: {
        backgroundColor: '#e74c3c',
        height: height * 0.2,   
        marginVertical: 10,
        marginHorizontal: width * 0.02, 
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
    button5: {
        backgroundColor: '#3498db',
        height: height * 0.2,  
        marginVertical: 10,
        marginHorizontal: width * 0.02, 
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
    button6: {
        backgroundColor: '#f1c40f',
        height: height * 0.2,   
        marginVertical: 10,
        marginHorizontal: width * 0.02, 
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
    button7: {
        backgroundColor: '#ff6b81',
        height: height * 0.2,   
        marginVertical: 10,
        marginHorizontal: width * 0.02, 
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
    textmsg1: {
        flexDirection: 'column',
        width: width * 0.45,
    },
    image1:{
        flex: 1,
        height: height * 0.2,
    },
    buttonText:{
        fontSize: width * 0.08, 
        color: '#FFFFFF',
        fontWeight: 'bold',
        textAlign: 'center',
    },

})