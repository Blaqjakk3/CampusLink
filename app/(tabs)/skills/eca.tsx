import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from 'expo-router';
import { StyleSheet } from 'react-native';

const ECA = () => {
  const navigation = useNavigation();
  return (
    <ScrollView contentContainerStyle={styles.container}>
    <Text style={styles.title}>Extracurricular Activities</Text>
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('sports')}>
      <Text style={styles.buttonText}>Sports</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('music')}>
      <Text style={styles.buttonText}>Music</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('arts')}>
      <Text style={styles.buttonText}>Arts and Crafts</Text>
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


export default ECA