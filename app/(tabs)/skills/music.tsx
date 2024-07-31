// techskills/Music.tsx
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';

const Music = () => {
  const resources = [
    {
      title: "The MOST Important Musical Skill",
      description: "Great video for music lovers and enthusiasts.",
      link: "https://www.youtube.com/watch?v=6fSsO7-4lLE"
    },
    {
      title: "Music Theory: Musical Form",
      description: "This free online music theory course teaches you about musical form. In this course you will study the six models in classical music from sonata-allegro to rondo form and how each model was formed including their differences. ",
      link: "https://alison.com/course/music-theory-musical-form"
    },
    {
      title: "Basics of Music Theory",
      description: "If the skills and techniques studied in this course are applied correctly, music becomes easier to understand and to play on a piano or keyboard.",
      link: "https://alison.com/course/fundamentals-of-music-theory"
    },
    
  ];

  const openLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Music Skills</Text>
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

export default Music;
