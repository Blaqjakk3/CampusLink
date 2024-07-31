// techskills/MachineLearning.tsx
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';

const MachineLearning = () => {
  const resources = [
    {
      title: "Machine Learning Crash Course",
      description: "Learn the basics of Machine Learning with this crash course from Google.",
      link: "https://developers.google.com/machine-learning/crash-course"
    },
    {
      title: "Deep Learning Specialization",
      description: "Master Deep Learning with this specialization from Andrew Ng on Coursera.",
      link: "https://www.coursera.org/specializations/deep-learning"
    },
    {
      title: "Machine Learning with Python",
      description: "A great video to help you begin your machine learning journey with Python!",
      link: "https://www.youtube.com/watch?v=7eh4d6sabA0"
    },
    {
      title: "Machine Learning A-Z",
      description: "This is a great Udemy Course to help you become a machine learning expert. Note that it is paid though.",
      link: "https://www.udemy.com/course/machinelearning/"
    },
  ];

  const openLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Machine Learning</Text>
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

export default MachineLearning;
