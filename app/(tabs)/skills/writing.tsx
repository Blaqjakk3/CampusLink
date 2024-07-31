// techskills/Writing.tsx
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';

const Writing = () => {
  const resources = [
    {
      title: "Effective Writing Skills",
      description: "A great YZoutube playlist to learn the basics of effective writing.",
      link: "https://www.youtube.com/playlist?list=PLLy_2iUCG87AuIWZ3qnjA1GriD-IGF3Za"
    },
    {
      title: "Grammar and Punctuation",
      description: "Improve your grammar and punctuation skills.",
      link: "https://www.coursera.org/learn/grammar-punctuation"
    },
    {
      title: "Creative Writing",
      description: "A great course to help you begin your creative writing journey.",
      link: "https://www.coursera.org/specializations/creative-writing"
    },
    {
      title: "Writing in English at University",
      description: "This is a great course to help you with academic writing.",
      link: "https://www.coursera.org/learn/writing-english-university"
    },
  ];

  const openLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Writing Skills</Text>
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

export default Writing;
