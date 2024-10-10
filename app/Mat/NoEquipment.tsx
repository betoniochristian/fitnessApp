import React from 'react'
import { View, StyleSheet, Text, Dimensions } from 'react-native'

export default function NoEquipment(){
    return(

        <View style={styles.container}>
            <Text style={styles.text}>Hello World!</Text>
        </View>
    )
}



const { height, width } = Dimensions.get('window')
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 24,
    },
}) 