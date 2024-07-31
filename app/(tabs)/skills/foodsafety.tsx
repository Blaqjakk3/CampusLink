// techskills/FoodSafety.tsx
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';

const FoodSafety = () => {
  const resources = [
    {
      title: "Food Safety Training - Safe Practices and Procedures",
      description: "This free online course in Food Safety teaches you about safe practices and procedures within food service operations.",
      link: "https://alison.com/course/food-safety-training-safe-practices-and-procedures-revised"
    },
    {
      title: "Food safety 101 - The journey of food safety from farm to table",
      description: "Unsafe food can lead to over 600 million people getting sick each year. In this video, we’ll take a look at what makes food unsafe - contaminants, examples of how contaminants enter the food across the supply chain, the health impacts of unsafe food, and how it can be prevented - at an individual, industry, national and global level.",
      link: "https://www.youtube.com/watch?v=nGKv7l3saK4"
    },
    {
      title: "Food Safety and Hygiene",
      description: "This course explains food contamination in detail and covers the measures, tools and regulations for safely handling food and managing a hygienic cooking area.",
      link: "https://alison.com/course/food-safety-and-hygiene"
    },
  ];

  const openLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Food Safety Skills</Text>
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

export default FoodSafety;
