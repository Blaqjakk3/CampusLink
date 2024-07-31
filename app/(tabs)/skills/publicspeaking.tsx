// techskills/PublicSpeaking.tsx
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';

const PublicSpeaking = () => {
  const resources = [
    {
      title: "Public Speaking For Beginners",
      description: "Learn the fundamentals of public speaking.",
      link: "https://www.youtube.com/watch?v=i5mYphUoOCs"
    },
    {
      title: "Be More Confident as a Public Speaker",
      description: "Master the art of public speaking and be more confident at it.",
      link: "https://www.youtube.com/watch?v=tShavGuo0_E"
    },
    {
      title: "The Complete Presentation and Public Speaking/Speech Course",
      description: "From page to stage; learn everything you need to know about giving a great speech for business & personal presentations.",
      link: "https://www.udemy.com/course/the-complete-presentation-and-public-speaking-speech-course/?couponCode=ST4MT73124"
    },
    {
      title: "Speak Like a Pro: Public Speaking for Professionals",
      description: "Master presentation skills and impromptu speaking, conquer speech anxiety, and get your point across to any audience",
      link: "https://www.udemy.com/course/speak-like-a-pro-public-speaking-for-professionals/?couponCode=ST4MT73124"
    },
  ];

  const openLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Public Speaking Skills</Text>
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

export default PublicSpeaking;
