// techskills/Negotiating.tsx
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';

const Negotiating = () => {
  const resources = [
    {
      title: "Negotiation Skills",
      description: "Learn the basics of negotiation.",
      link: "https://www.coursera.org/learn/negotiation-skills"
    },
    {
      title: "The Harvard Principles of Negotiation",
      description: "Dr. Thomas Henschel (Academy of Mediation in Berlin) explains The Harvard Approach and how to get a Yes in every negotiation. ",
      link: "https://www.youtube.com/watch?v=RfTalFEeKKE"
    },
    {
      title: "Negotiation Fundamentals",
      description: "A great course to help you begin your negotiation journey.",
      link: "https://www.udemy.com/course/negotiation-fundamentals/"
    },
    {
      title: "Ultimate Contract Negotiation Mastery: Winning Strategies",
      description: "Advanced Negotiation Skills for Business and Procurement: Strategies for Effective Contract Drafting & Negotiation",
      link: "https://www.udemy.com/course/ultimate-contract-negotiation-mastery-winning-strategies/?couponCode=ST4MT73124"
    },
  ];

  const openLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Negotiating Skills</Text>
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

export default Negotiating;
