import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from 'expo-router';
import { StyleSheet } from 'react-native';

const Social = () => {
  const navigation = useNavigation();
  return (
    <ScrollView contentContainerStyle={styles.container}>
    <Text style={styles.title}>Social Skills</Text>
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('publicspeaking')}>
      <Text style={styles.buttonText}>Public Speaking</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('teamwork')}>
      <Text style={styles.buttonText}>Teamwork</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('networking')}>
      <Text style={styles.buttonText}>Network</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('conflictresolution')}>
      <Text style={styles.buttonText}>Conflict Resolution</Text>
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



export default Social