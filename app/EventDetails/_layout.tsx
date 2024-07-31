import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Link, Stack, useLocalSearchParams } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { getEventById } from '@/lib/appwrite';

const Layout = () => {
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
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (!event) {
    return <Text>Event not found</Text>;
  }

  const { eventname } = event;


  return (
    <GestureHandlerRootView>
      <Stack>
        <Stack.Screen
          name="[id]"
          options={{
            title: eventname,
            headerShown: true,
            headerStyle: {
              backgroundColor: '#ff2c5f',
            },
          }}
        />
      </Stack>
    </GestureHandlerRootView>
  );
};

export default Layout;
