import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, Text, Dimensions, useColorScheme } from 'react-native';
import { Colors } from '@/constants/Colors'

const workoutSuggestions = [
    { id: 1, title: "Upper Body Strength", duration: "35 mins", intensity: "Medium", equipment: "Barbell" },
    { id: 2, title: "Lower Body Blast", duration: "30 mins", intensity: "High", equipment: "Resistance Bands" },
    { id: 3, title: "Intermediate Full Body Strength", duration: "40 mins", intensity: "Medium", equipment: "Dumbbells" },
    { id: 4, title: "Intermediate HIIT", duration: "25 mins", intensity: "High", equipment: "None" },
    { id: 5, title: "Core Strength and Stability", duration: "25 mins", intensity: "Medium", equipment: "None" },
    { id: 6, title: "Lower Body Plyometrics", duration: "30 mins", intensity: "High", equipment: "None" },
    { id: 7, title: "Cardio Strength Circuit", duration: "35 mins", intensity: "Medium", equipment: "Kettlebell" },
];

export default function SuggestAdv() {
    const colorScheme = useColorScheme();
    const isDarkMode = colorScheme === 'dark';
    const currentColor = isDarkMode ? Colors.dark : Colors.light

    const handleWorkoutPress = (workout: typeof workoutSuggestions[0]) => {
        console.log(`Selected Workout: ${workout.title}`);
    };

    return (
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
        elevation: 3, // For shadow on Android
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
