import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, Text, Dimensions, useColorScheme } from 'react-native';
import { Colors } from '@/constants/Colors'

const workoutSuggestions = [
    { id: 1, title: "Full Body Workout", duration: "30 mins", intensity: "Medium", equipment: "Dumbbells" },
    { id: 2, title: "HIIT Cardio", duration: "20 mins", intensity: "High", equipment: "None" },
    { id: 3, title: "Yoga for Beginners", duration: "45 mins", intensity: "Low", equipment: "Yoga Mat" },
    { id: 4, title: "Upper Body Strength", duration: "35 mins", intensity: "Medium", equipment: "Barbell" },
    { id: 5, title: "Lower Body Blast", duration: "30 mins", intensity: "High", equipment: "Resistance Bands" },
];

export default function Suggestion() {
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
