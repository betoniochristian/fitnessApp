

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function profile() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Explore Workouts and Nutrition</Text>
      <Text style={styles.subtitle}>Find tips and resources to stay fit!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    marginTop: 10,
  },
});
