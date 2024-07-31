// techskills/Sports.tsx
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';

const Sports = () => {
  const resources = [
    {
      title: "First Aid for Sports",
      description: "This course addresses the essential concepts and principles of first aid in sports.",
      link: "https://alison.com/course/first-aid-for-sports"
    },
    {
      title: "5 most basic soccer/football skills for beginners",
      description: "Learn the 5 most important and basic soccer/football skills.",
      link: "5 most basic soccer/football skills for beginners"
    },
    {
      title: "Diploma in Sports Coaching",
      description: "Learn how to become a great sports coach in this sports science diploma course.",
      link: "https://alison.com/course/diploma-in-sports-coaching"
    },
    
  ];

  const openLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Sports Skills</Text>
      {resources.map((resource, index) => (
        <View key={index} style={styles.resourceContainer}>
          <Text style={styles.resourceTitle}>{resource.title}</Text>
          <Text style={styles.resourceDescription}>{resource.description}</Text>
          <TouchableOpacity style={styles.button} onPress={() => openLink(resource.link)}>
            <Text style={styles.buttonText}>Go to Resource</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    paddingBottom: 50, // Add padding to the bottom to ensure scrollability
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  resourceContainer: {
    marginBottom: 30,
    borderColor: '#ff2c5f',
    borderWidth: 2,
    borderRadius: 10,
    padding: 15,
  },
  resourceTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  resourceDescription: {
    fontSize: 16,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
  },
});

export default Sports;
