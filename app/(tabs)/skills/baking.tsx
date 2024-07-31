// techskills/Baking.tsx
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';

const Baking = () => {
  const resources = [
    {
      title: "Baking and Desserts for Beginners",
      description: " This course will help beginners understand the fundamental techniques and methods for baking, and preparing desserts.",
      link: "https://alison.com/course/baking-and-desserts-for-beginners"
    },
    {
      title: "How to Make Bread",
      description: "This baking course guides you through the fundamentals of making bread, starting at the beginning and taking you forward step by step until you master the skills required.",
      link: "https://alison.com/course/how-to-make-bread"
    },
    {
      title: "20 EASY 3-Ingredient Baking Recipes",
      description: "A great video for quick baking recipes.",
      link: "https://www.youtube.com/watch?v=ECdl9-Wrm9U"
    },
  ];

  const openLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Baking Skills</Text>
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

export default Baking;
