// techskills/Cooking.tsx
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';

const Cooking = () => {
  const resources = [
    {
      title: "Cooking Basics - Food Hygiene, Kitchen Utensils & Seasonings",
      description: "In this course, you will learn various culinary skills, such as slicing and dicing, using and honing knives properly, cleaning vegetables, making stock, creating sauces, kneading dough kneading and so forth. ",
      link: "https://alison.com/course/cooking-basics-food-hygiene-kitchen-utensils-and-seasonings"
    },
    {
      title: "Cooking Tips For Kitchen Beginners",
      description: "Professional chef instructor Frank Proto shares his top tips for beginners, helping you to elevate the basic skills you'll need to find your footing in the kitchen.",
      link: "https://www.youtube.com/watch?v=aopS3q6f1GY&t=456s"
    },
    {
      title: "Culinary Skills and Techniques",
      description: " In this course, you will learn how to create new dishes, keep the kitchen safe, run the kitchen effectively, and broaden your knowledge of various world cuisines and flavours while enhancing your life and the lives of those you cook for in the healthiest possible way.",
      link: "https://alison.com/course/culinary-skills-and-techniques"
    },

  ];

  const openLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Cooking Skills</Text>
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

export default Cooking;
