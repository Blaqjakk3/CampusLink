import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import AddFriends from '../addscreens/addfriends';
import JoinCliques from '../addscreens/joincliques';
import RequestsScreen from '../addscreens/requests';

const Tab = createMaterialTopTabNavigator();

const AddScreen = () => {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        initialRouteName="AddFriends"
        screenOptions={{
          tabBarActiveTintColor: '#ff2c5f',
          tabBarIndicatorStyle: { backgroundColor: '#ff2c5f' },
        }}
      >
        <Tab.Screen name="AddFriends" component={AddFriends} options={{ title: 'Add Friends' }} />
        <Tab.Screen name="JoinCliques" component={JoinCliques} options={{ title: 'Join Cliques' }} />
        <Tab.Screen name="Requests" component={RequestsScreen} options={{ title: 'Requests' }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AddScreen;
