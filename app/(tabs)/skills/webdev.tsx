// techskills/WebDevelopment.tsx
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';

const WebDev = () => {
  const resources = [
    {
      title: "HTML & CSS Documentation",
      description: "Learn the basics of web development with HTML and CSS.",
      link: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics"
    },
    {
      title: "HTML and CSS crash course",
      description: "A great youtube video to help in your journey in web devbelopment quickly",
      link: "https://www.youtube.com/watch?v=qz0aGYrrlhU"
    },
    {
      title: "React Beginner Tutorial",
      description: "A great video to help you begin your journey with React!",
      link: "https://www.youtube.com/watch?v=Ke90Tje7VS0"
    },
    {
      title: "Web Development Bootcamp",
      description: "This is a great Udemy Course to help you become a full-stack web developer. Note that it is paid though.",
      link: "https://www.udemy.com/course/the-web-developer-bootcamp/"
    },
  ];

  const openLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Web Development</Text>
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

export default WebDev;
