// techskills/ActiveListening.tsx
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';

const ActiveListening = () => {
  const resources = [
    {
      title: "Active Listening Skills",
      description: "Learn the basics of active listening.",
      link: "https://www.youtube.com/watch?v=7wUCyjiyXdg"
    },
    {
      title: "Effective Listening Skills for Leaders",
      description: "Improving your listening skills is one of the best way to improve your leadership skills. Practice along in real time.",
      link: "https://www.udemy.com/course/effective-listening-for-leaders/?couponCode=ST4MT73124"
    },
    {
      title: "Active Listening: You Can Be a Great Listener",
      description: "Improve your reactive habits, define your listening mindset, amplify your curiosity, & add value as a great listener",
      link: "https://www.udemy.com/course/active-listening-you-can-be-a-great-listener/?couponCode=ST4MT73124"
    },
  ];

  const openLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Active Listening Skills</Text>
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

export default ActiveListening;
