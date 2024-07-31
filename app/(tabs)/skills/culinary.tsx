import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from 'expo-router';
import { StyleSheet } from 'react-native';

const Culinary = () => {
  const navigation = useNavigation();
  return (
    <ScrollView contentContainerStyle={styles.container}>
    <Text style={styles.title}>Culinary Skills</Text>
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('cooking')}>
      <Text style={styles.buttonText}>Cooking</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('baking')}>
      <Text style={styles.buttonText}>Baking</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('mealplanning')}>
      <Text style={styles.buttonText}>Meal Planning</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('foodsafety')}>
      <Text style={styles.buttonText}>Food Safety</Text>
    </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    justifyContent: 'flex-start',
    marginTop: 0,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});


export default Culinary