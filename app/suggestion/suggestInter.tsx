import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, Text, Dimensions, useColorScheme } from 'react-native';
import { Colors } from '@/constants/Colors'

const workoutSuggestions = [
    { id: 1, title: "Advanced Full Body Circuit", duration: "50 mins", intensity: "High", equipment: "Dumbbells, Kettlebell" },
    { id: 2, title: "Advanced HIIT", duration: "30 mins", intensity: "Very High", equipment: "None" },
    { id: 3, title: "Strength and Conditioning", duration: "45 mins", intensity: "High", equipment: "Barbell, Dumbbells" },
    { id: 4, title: "Advanced Core Strength", duration: "30 mins", intensity: "High", equipment: "None" },
    { id: 5, title: "Endurance Challenge", duration: "60 mins", intensity: "Very High", equipment: "None" },
    { id: 6, title: "Explosive Power Training", duration: "40 mins", intensity: "High", equipment: "Dumbbells, Resistance Bands" },
    { id: 7, title: "Advanced Strength Split (Upper/Lower)", duration: "60 mins", intensity: "Very High", equipment: "Barbell, Dumbbells" },
];

export default function SuggestInter() {
    const colorScheme = useColorScheme();
    const isDarkMode = colorScheme === 'dark';
    const currentColor = isDarkMode ? Colors.dark : Colors.light

    const handleWorkoutPress = (workout: typeof workoutSuggestions[0]) => {
        console.log(`Selected Workout: ${workout.title}`);
    };

    return (
        <View style={styles.container}>
        <ScrollView contentContainerStyle={[styles.container, {backgroundColor: currentColor.background}]}>
            {workoutSuggestions.map(workout => (
                <TouchableOpacity 
                    key={workout.id} 
                    style={styles.workoutCard} 
                    onPress={() => handleWorkoutPress(workout)}
                >
                    <Text style={styles.workoutTitle}>{workout.title}</Text>
                    <Text style={styles.workoutDetail}>Duration: {workout.duration}</Text>
                    <Text style={styles.workoutDetail}>Intensity: {workout.intensity}</Text>
                    <Text style={styles.workoutDetail}>Equipment: {workout.equipment}</Text>
                </TouchableOpacity>
            ))}
        </ScrollView>
        </View>
    );
}

const { height, width } = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    workoutCard: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        marginVertical: 10,
        elevation: 3, 
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    workoutTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    workoutDetail: {
        fontSize: 14,
        color: '#666',
    },
});
