import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from 'expo-router';
import { StyleSheet } from 'react-native';

const Others = () => {
  const navigation = useNavigation();
  return (
    <ScrollView contentContainerStyle={styles.container}>
    <Text style={styles.title}>Other Skills</Text>
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('photography')}>
      <Text style={styles.buttonText}>Photography</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('diy')}>
      <Text style={styles.buttonText}>DIY Projects</Text>
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

export default Others