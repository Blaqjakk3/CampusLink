import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import AddFriends from './addfriends';
import RequestsScreen from './requests';

const Tab = createMaterialTopTabNavigator();

const AddScreen = () => {
  const navigation = useNavigation(); // Use navigation hook

  return (
    <NavigationContainer independent={true}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.headerText}>Add</Text>
        </View>
        <Tab.Navigator
          initialRouteName="AddFriends"
          screenOptions={{
            tabBarActiveTintColor: '#ff2c5f',
            tabBarIndicatorStyle: { backgroundColor: '#ff2c5f' },
          }}
        >
          <Tab.Screen name="AddFriends" component={AddFriends} options={{ title: 'Add Friends' }} />
          <Tab.Screen name="Requests" component={RequestsScreen} options={{ title: 'Requests' }} />
        </Tab.Navigator>
      </View>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 90,
    backgroundColor: '#ff2c5f',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    paddingTop: 20,
  },
  headerText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10, // Add some space between the icon and the text
  },
});

export default AddScreen;
