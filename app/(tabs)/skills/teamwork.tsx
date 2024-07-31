// techskills/Teamwork.tsx
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';

const Teamwork = () => {
  const resources = [
    {
      title: "Developing Your Team - Teamwork from Forming to Performing",
      description: "A Team Building Guide - How To Build A High Performing Self-Directed Team - A Teamwork Guide",
      link: "https://www.udemy.com/course/building-your-team/?couponCode=ST4MT73124"
    },
    {
      title: "Teamwork: Effective Project Teams",
      description: "How to be a successful team member",
      link: "https://www.udemy.com/course/teamwork-projects/?couponCode=ST4MT73124"
    },
    {
      title: "Teamwork Skills for workplace success (5 TOP Example)",
      description: "Great teamwork skills to help you in the workplace",
      link: "https://www.youtube.com/watch?v=D3KJufY9r4I"
    },
  ];

  const openLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Teamwork Skills</Text>
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

export default Teamwork;
