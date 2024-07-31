// techskills/Presenting.tsx
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';

const Presenting = () => {
  const resources = [
    {
      title: "How To Improve Your Presentation Skills",
      description: "Learn the basics of effective presentation.",
      link: "https://www.youtube.com/watch?v=N5t3NTix1hw"
    },
    {
      title: "Public Speaking for Beginners",
      description: "A great course to help you begin your public speaking journey.",
      link: "https://www.udemy.com/course/public-speaking-for-beginners-al/?kw=public+speaking+for+be&src=sac&couponCode=ST4MT73124"
    },
    {
      title: "Presentation Skills Training",
      description: "This is a great course to help you with your presentation skills.",
      link: "https://www.udemy.com/course/how-to-give-a-one-on-one-presentation/?couponCode=ST4MT73124"
    },
  ];

  const openLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Presenting Skills</Text>
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

export default Presenting;
