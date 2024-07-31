import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator, ScrollView, Linking, TouchableOpacity } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { getEventById } from '@/lib/appwrite'; // Ensure this path is correct
import { format } from 'date-fns';
import { Ionicons } from '@expo/vector-icons';

const EventDetails = () => {
  const { id } = useLocalSearchParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const eventData = await getEventById(id);
        setEvent(eventData);
      } catch (error) {
        console.error("Failed to fetch event data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [id]);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" style={styles.loadingIndicator} />;
  }

  if (!event) {
    return <Text style={styles.errorText}>Event not found</Text>;
  }

  const { eventname, school, location, datetime, about, flyer, links, organizer, organizerContact } = event;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: flyer }} style={styles.flyer} resizeMode="contain" />
      <Text style={styles.title}>{eventname}</Text>
      <Text style={styles.location}>
        <Ionicons name="location-outline" size={16} color="grey" /> {location}, {school}
      </Text>
      <Text style={styles.datetime}>
        <Ionicons name="calendar-outline" size={16} color="grey" /> {format(new Date(datetime), 'MM/dd/yyyy')} at {format(new Date(datetime), 'hh:mm a')}
      </Text>
      <Text style={styles.about}>{about}</Text>
      <View style={styles.linksContainer}>
        {links.map((link, index) => (
          <TouchableOpacity key={index} onPress={() => Linking.openURL(link)}>
            <Text style={styles.link}>
              <Ionicons name="link-outline" size={16} color="blue" /> Link {index + 1}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.creator}>
        <Text style={styles.organizer}>
          <Ionicons name="person-outline" size={16} color="grey" /> Organized by: {organizer}
        </Text>
        <Text style={styles.contact}>Contact:</Text>
        {organizerContact.map((contact, index) => (
          <TouchableOpacity key={index} onPress={() => Linking.openURL(`tel:${contact}`)}>
            <Text style={styles.contactDetail}>
              <Ionicons name="call-outline" size={16} color="blue" /> {contact}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'white',
  },
  flyer: {
    width: '100%',
    height: 300,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  location: {
    fontSize: 18,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  datetime: {
    fontSize: 18,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  about: {
    fontSize: 16,
    marginBottom: 10,
  },
  linksContainer: {
    marginBottom: 10,
  },
  link: {
    fontSize: 16,
    marginBottom: 5,
    color: 'blue',
    flexDirection: 'row',
    alignItems: 'center',
  },
  creator: {
    marginTop: 20,
  },
  organizer: {
    fontSize: 16,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  contact: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
  },
  contactDetail: {
    fontSize: 16,
    color: 'blue',
    flexDirection: 'row',
    alignItems: 'center',
  },
  loadingIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
  },
});

export default EventDetails;
