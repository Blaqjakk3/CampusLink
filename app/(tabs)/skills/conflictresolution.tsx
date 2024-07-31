// techskills/ConflictResolution.tsx
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';

const ConflictResolution = () => {
  const resources = [
    {
      title: "Fundamentals of Conflict Resolution",
      description: "Minor professional disagreements can escalate into major conflicts that compromise organisational productivity. This course lays out the basics of conflict resolution. ",
      link: "https://alison.com/course/fundamentals-of-conflict-resolution"
    },
    {
      title: "Conflict Resolution in the Workplace",
      description: "This free online course Conflict Resolution in the workplace teaches students about setting workplace policies for conflict resolution and workplace civility.",
      link: "https://alison.com/course/conflict-resolution-in-the-workplace"
    },
    {
      title: "Communication and Conflict Management",
      description: "In this certificate course, you will learn about the role of perception in communication. In addition, you will understand what negotiation is and what the main techniques for group decision making and problem solving are.",
      link: "https://alison.com/course/communication-and-conflict-management"
    },
  ];

  const openLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Conflict Resolution Skills</Text>
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

export default ConflictResolution;
