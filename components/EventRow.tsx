// app/components/EventsRow.tsx
import { View, Text } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';
import { format } from 'date-fns';

const EventsRow = ({ event }) => {
  const { eventname, school,  location, datetime, about, flyer, links, organizer, organizerContact } = event;



  return (
    <Link href={`/EventDetails/${event.$id}`} asChild>
      <TouchableHighlight activeOpacity={0.6} underlayColor='lightgrey' style={styles.eventcontainer}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 14, paddingLeft: 20, paddingVertical: 10 }}>
          <Ionicons name="calendar" size={24} color="black" />
          <View style={styles.info}>
            <Text style={styles.name}>{eventname}</Text>
            <Text style={styles.location}>{location}, {school}</Text>
            <Text style={styles.datetime}>
            {format(new Date(datetime), 'MM/dd/yyyy')} at {format(new Date(datetime), 'hh:mm a')}
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    </Link>
  );
};

const styles = StyleSheet.create({
  mainview: {
    flexDirection: "column",
    alignItems: "center",
    paddingHorizontal: 4,
    marginBottom: 14,
  },
  titletext: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
  },
  location: {

  },
  name: {

  },
  info: {

  },
  datetime: {

  },
  creator: {

  },
  eventcontainer:{
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 5,
  }
});

export default EventsRow;
