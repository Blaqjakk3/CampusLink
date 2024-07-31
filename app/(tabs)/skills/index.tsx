import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { Entypo, FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Skills = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>
        Welcome to the Skills Hub!
      </Text>
      <Text style={styles.subText}>
        Discover top resources to learn new skills in tech, communication, culinary arts, and more. Start your journey with our curated videos, courses, and guides. Happy learning!
      </Text>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('tech')}>
          <Entypo name="code" size={40} color="white" />
          <Text style={styles.buttonText}>Tech Skills</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('communication')}>
          <FontAwesome name="comments" size={40} color="white" />
          <Text style={styles.buttonText}>Communication Skills</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('social')}>
          <FontAwesome name="group" size={40} color="white" />
          <Text style={styles.buttonText}>Social Skills</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('culinary')}>
          <Entypo name="cake" size={40} color="white" />
          <Text style={styles.buttonText}>Culinary Skills</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('others')}>
          <Entypo name="light-up" size={40} color="white" />
          <Text style={styles.buttonText}>Other Skills</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('eca')}>
          <Entypo name="suitcase" size={40} color="white" />
          <Text style={styles.buttonText}>Extra-Curriculars</Text>
        </TouchableOpacity>
      </View>
      {/* Add more rows as needed */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
    marginTop: 35, // Adjust this value to move the content higher or lower on the page
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007bff', // Color for the header text
    textAlign: 'center',
    marginBottom: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'rgba(0, 123, 255, 0.1)', // Light background color
    borderRadius: 10,
    elevation: 5, // Adds shadow effect for Android
    shadowColor: '#000', // Adds shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  subText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '80%', // Adjust this value to control button row width
    marginBottom: 20, // Space between rows
  },
  button: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#007bff', // Button background color
    paddingVertical: 20, // Increase vertical padding for larger button
    paddingHorizontal: 25, // Increase horizontal padding for larger button
    marginHorizontal: 10,
    borderRadius: 12, // Slightly larger border radius
    height: 110, // Increase height to accommodate larger icons and text
    elevation: 3, // Optional: Adds shadow for Android
    shadowColor: '#000', // Optional: Adds shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  buttonText: {
    color: 'white',
    fontSize: 16, // Increase font size for better readability
    marginTop: 10, // Space between icon and text
  },
});

export default Skills;
