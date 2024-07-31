// ProgrammingLanguages.tsx
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';

const ProgrammingLanguages = () => {
  const resources = [
    {
      title: "Python Documentation",
      description: "Learn Python, a powerful and versatile programming language.",
      link: "https://www.learnpython.org/"
    },
    {
      title: "JavaScript Documentation",
      description: "Master JavaScript, the language of the web.",
      link: "https://www.javascript.com/learn"
    },
    {
      title: "Python Beginner Tutorial",
      description: "A great video to help you begin your Python journey!",
      link: "https://www.youtube.com/watch?v=kqtD5dpn9C8"
    },
    {
      title: "Beginning C++ Programming",
      description: "This is a great Udemy Course to help you from beginning to beyond. Note that it is paid though.",
      link: "https://www.udemy.com/course/beginning-c-plus-plus-programming/"
    },
  ];

  const openLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Programming Languages</Text>
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

export default ProgrammingLanguages;
