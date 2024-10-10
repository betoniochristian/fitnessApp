import React, { useState } from 'react';
import { View, StyleSheet, Text, Dimensions, ScrollView, TextInput, TouchableOpacity, Alert, FlatList, Button, useColorScheme } from 'react-native';
import { Colors } from '@/constants/Colors';

interface WorkoutPlan {
  exercise: string;
  weight: string;
  reps: string;
  sets: string;
  notes?: string; 
}

export default function TrackWeight() {
  const colorScheme = useColorScheme(); 
  const isDarkMode = colorScheme === 'dark';
  const currentColors = isDarkMode ? Colors.dark : Colors.light; 

  const [selectedDay, setSelectedDay] = useState<string>('');
  const [workoutPlans, setWorkoutPlans] = useState<{ [key: string]: WorkoutPlan[] }>({}); 

  const [exercise, setExercise] = useState<string>(''); 
  const [weight, setWeight] = useState<string>(''); 
  const [reps, setReps] = useState<string>(''); 
  const [sets, setSets] = useState<string>(''); 
  const [notes, setNotes] = useState<string>(''); 

  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];

  const saveWorkout = () => {
    if (!exercise || !weight || !reps || !sets) {
      Alert.alert('Error', 'Please fill in all fields (Exercise, Weight, Reps, Sets)');
      return;
    }
    if (parseFloat(weight) <= 0 || parseInt(reps) <= 0 || parseInt(sets) <= 0) {
      Alert.alert('Error', 'Weight, Reps, and Sets must be positive numbers');
      return;
    }

    const newWorkoutPlan: WorkoutPlan = { exercise, weight, reps, sets, notes };

    setWorkoutPlans(prevState => ({
      ...prevState,
      [selectedDay]: [...(prevState[selectedDay] || []), newWorkoutPlan],
    }));

    setExercise('');
    setWeight('');
    setReps('');
    setSets('');
    setNotes('');
    Alert.alert('Success', 'Workout saved successfully!'); // Confirmation alert
  };

  const clearDayWorkout = () => {
    setWorkoutPlans(prevState => ({
      ...prevState,
      [selectedDay]: [],
    }));
    Alert.alert('Cleared', `All workouts for ${selectedDay} have been cleared.`);
  };

  const removeWorkout = (index: number) => {
    const updatedWorkouts = workoutPlans[selectedDay].filter((_, i) => i !== index);
    setWorkoutPlans(prevState => ({
      ...prevState,
      [selectedDay]: updatedWorkouts,
    }));
    Alert.alert('Removed', 'Workout removed successfully.');
  };

  return (
    <ScrollView contentContainerStyle={[styles.container, {backgroundColor: currentColors.background}]}>
      <Text style={[styles.title, {color: currentColors.header1}]}>Plan Your Workouts</Text>

      <View style={styles.dayButtonsContainer}>
            {daysOfWeek.map(day => (
                <TouchableOpacity
                key={day}
                style={[styles.dayButton, selectedDay === day && styles.selectedDayButton]} // Conditional styling
                onPress={() => setSelectedDay(day)}
                >
                <Text style={styles.dayButtonText}>{day}</Text>
                </TouchableOpacity>
            ))}
            </View>

      {selectedDay && (
        <View style={styles.formContainer}>
          <Text style={[styles.selectedDayText, {color: currentColors.header1}]}>Workout for {selectedDay}</Text>

          <TextInput
            style={styles.input}
            placeholder="Exercise (e.g., Bench Press)"
            value={exercise}
            onChangeText={setExercise}
          />

          <TextInput
            style={styles.input}
            placeholder="Weight (kg)"
            keyboardType="numeric"
            value={weight}
            onChangeText={setWeight}
          />

          <TextInput
            style={styles.input}
            placeholder="Reps"
            keyboardType="numeric"
            value={reps}
            onChangeText={setReps}
          />

          <TextInput
            style={styles.input}
            placeholder="Sets"
            keyboardType="numeric"
            value={sets}
            onChangeText={setSets}
          />

          <TextInput
            style={styles.input}
            placeholder="Notes (optional)"
            value={notes}
            onChangeText={setNotes}
          />

          <Button title="Save Workout" onPress={saveWorkout} />
          <Button title="Clear Workouts for Day" onPress={clearDayWorkout} color="red" />

          {workoutPlans[selectedDay] && workoutPlans[selectedDay].length > 0 && (
            <View style={styles.savedWorkoutContainer}>
              <Text style={styles.savedWorkoutText}>Saved Workouts for {selectedDay}:</Text>
              <FlatList
                data={workoutPlans[selectedDay]}
                keyExtractor={(_, index) => index.toString()}
                renderItem={({ item, index }) => (
                  <View style={styles.workoutItem}>
                    <Text style={styles.savedWorkoutText}>
                      {index + 1}. {item.exercise}: {item.weight}kg, {item.reps} reps, {item.sets} sets
                    </Text>
                    {item.notes && <Text style={styles.noteText}>Notes: {item.notes}</Text>}
                    <Button title="Remove" onPress={() => removeWorkout(index)} color="red" />
                  </View>
                )}
              />
            </View>
          )}
        </View>
      )}
    </ScrollView>
  );
}

const { height, width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  dayButtonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
    backgroundColor: '#7c73e6', 
    borderRadius: 10,

    elevation: 20, 
    
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.25, 
    shadowRadius: 3.5, 
  },
  dayButton: {
    backgroundColor: '#2e2e2e',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
    margin: 5, 
    elevation: 2, 
  },
  selectedDayButton: {
    backgroundColor: 'blue', 
  },
  dayButtonText: {
    color: 'white', 
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  formContainer: {
    width: '100%',
    alignItems: 'center',
  },
  selectedDayText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  
  input: {
    width: width * 0.9,
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 8,
    marginVertical: 10,
  },
  savedWorkoutContainer: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
    width: width * 0.9,
  },
  workoutItem: {
    marginBottom: 10,
  },
  savedWorkoutText: {
    fontSize: 16,
    marginVertical: 5,
  },
  noteText: {
    fontSize: 14,
    fontStyle: 'italic',
    color: '#555',
  },
});
