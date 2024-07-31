// techskills/DataAnalysis.tsx
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';

const DataAnalysis = () => {
  const resources = [
    {
      title: "Pandas Documentation",
      description: "Learn Pandas, a powerful data analysis and manipulation library for Python.",
      link: "https://pandas.pydata.org/docs/"
    },
    {
      title: "Data Analysis with Python",
      description: "A great video to help you begin your data analysis journey with Python!",
      link: "https://www.youtube.com/watch?v=r-uOLxNrNk8"
    },
    {
      title: "Data Science and Machine Learning Bootcamp",
      description: "This is a great Udemy Course to help you become a data scientist. Note that it is paid though.",
      link: "https://www.udemy.com/course/python-for-data-science-and-machine-learning-bootcamp/"
    },
  ];

  const openLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Data Analysis</Text>
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

export default DataAnalysis;
