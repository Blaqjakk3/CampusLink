import React, { useState, useEffect } from 'react';
import { View, StyleSheet, SafeAreaView, FlatList, TextInput, Alert, Button } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { getAllEvents } from '@/lib/appwrite';
import { Text } from 'react-native';
import useAppwrite from '@/lib/useAppwrite';
import Eventsrow from '@/components/EventRow';
import { Picker } from '@react-native-picker/picker';

const Events = () => {
  const { data: events } = useAppwrite(getAllEvents);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('asc');
  const [filterOption, setFilterOption] = useState('all');
  const [filteredEvents, setFilteredEvents] = useState([]);

  useEffect(() => {
    let filteredData = events;

    // Filter by search query
    if (searchQuery) {
      filteredData = filteredData.filter(event =>
        event.eventname.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by school
    if (filterOption !== 'all') {
      filteredData = filteredData.filter(event => event.school === filterOption);
    }

    // Sort by date
    if (sortOption === 'asc') {
      filteredData = filteredData.sort((a, b) => new Date(a.datetime) - new Date(b.datetime));
    } else {
      filteredData = filteredData.sort((a, b) => new Date(b.datetime) - new Date(a.datetime));
    }

    setFilteredEvents(filteredData);
  }, [searchQuery, sortOption, filterOption, events]);

  const toggleSortOption = () => {
    setSortOption(prevSortOption => (prevSortOption === 'asc' ? 'desc' : 'asc'));
  };

  return (
    <GestureHandlerRootView>
      <SafeAreaView>
        <TextInput
          style={styles.searchBar}
          placeholder="Search Events"
          value={searchQuery}
          onChangeText={text => setSearchQuery(text)}
        />

        <View style={styles.filterContainer}>
          <Picker
            selectedValue={filterOption}
            style={styles.picker}
            onValueChange={(itemValue, itemIndex) => setFilterOption(itemValue)}
          >
            <Picker.Item label="All Schools" value="all" />
            <Picker.Item label="KNUST" value="KNUST" />
            <Picker.Item label="UG" value="UG" />
            {/* Add more school options here */}
          </Picker>

          <Button
            title={`Sort by Date (${sortOption === 'asc' ? 'Ascending' : 'Descending'})`}
            onPress={toggleSortOption}
          />
        </View>

        <FlatList
          data={filteredEvents}
          keyExtractor={(item) => item.$id}
          renderItem={({ item }) => (
            <Eventsrow event={item} />
          )}
          contentContainerStyle={styles.container}
        />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    margin: 10,
    paddingHorizontal: 10,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
    marginBottom: 10,
  },
  picker: {
    height: 40,
    width: 160,
    borderColor: 'gray',
    borderWidth: 10,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  container:{
    padding: 10,
  }
});

export default Events;
