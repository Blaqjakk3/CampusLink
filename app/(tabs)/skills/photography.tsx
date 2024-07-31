// techskills/Photography.tsx
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';

const Photography = () => {
  const resources = [
    {
      title: "PHOTOGRAPHY BASICS in 10 MINUTES",
      description: "Learn the basics of photography, including camera settings and composition.",
      link: "https://youtu.be/V7z7BAZdt2M?si=MRyWFsay9PFm-E3V"
    },
    {
      title: "Introduction to Digital Photography",
      description: "This course introduces you to the most important functions and techniques used to create digital photographs with your digital camera.",
      link: "https://alison.com/course/introduction-to-digital-photography"
    },
    {
      title: "Beginning Photography Fundamentals: Composition, Lighting & Camera Settings",
      description: "A comprehensive guide covering all aspects of photography.",
      link: "https://youtu.be/lHcA7pPwYZY?si=K-m27W-hxLnZ-miQ"
    },
  ];

  const openLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Photography Skills</Text>
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

export default Photography;
