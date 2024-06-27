import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
import { View, Text, Platform } from "react-native";
import Friends from "./friends";
import Cliques from "./cliques";
import Events from "./events";
import AddScreen from "./addscreen";
import Profile from "./profile";
import CustomHeader from "../../components/CustomHeader"; // Import the custom header

export default function Layout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: true,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: Platform.OS === "android" ? 88 : 60,
          backgroundColor: "white",
          alignItems: "center",
          justifyContent: "center",
          borderTopLeftRadius: 32,
          borderTopRightRadius: 32,
        },
        header: () => {
          let title = route.name.charAt(0).toUpperCase() + route.name.slice(1);
          if (route.name === "addscreen") {
            title = "Add";
          }
          return <CustomHeader title={title} />;
        },
      })}
    >
      <Tabs.Screen
        name="friends"
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                paddingTop: 10,
              }}
            >
              <Ionicons
                name={focused ? "heart" : "heart-half-outline"}
                color={focused ? "#ff2c5f" : "gray"}
                size={28}
              />
              <Text
                style={{
                  color: focused ? "#ff2c5f" : "gray",
                  fontSize: 12,
                  marginTop: 4,
                }}
              >
                Friends 
              </Text>
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="cliques"
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                paddingTop: 10,
              }}
            >
              <Ionicons
                name={focused ? "people" : "people-circle-outline"}
                color={focused ? "#ff2c5f" : "gray"}
                size={28}
              />
              <Text
                style={{
                  color: focused ? "#ff2c5f" : "gray",
                  fontSize: 12,
                  marginTop: 4,
                }}
              >
                Cliques   </Text>
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="addscreen"
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                alignContent: "center",
                justifyContent: "center",
                backgroundColor: focused ? "#ff2c5f" : "white",
                height: Platform.OS === "android" ? 70 : 60,
                width: Platform.OS === "android" ? 70 : 60,
                top: Platform.OS === "android" ? -40 : -30,
                borderRadius: Platform.OS === "android" ? 35 : 30,
                borderWidth: 3,
                borderColor: "#ff2c5f",
              }}
            >
              <Ionicons
                name="add"
                size={24}
                color={focused ? "white" : "black"} // Change icon color based on focus
              />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="events"
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                paddingTop: 10,
              }}
            >
              <Ionicons
                name={focused ? "calendar" : "calendar-clear-outline"}
                color={focused ? "#ff2c5f" : "gray"}
                size={28}
              />
              <Text
                style={{
                  color: focused ? "#ff2c5f" : "gray",
                  fontSize: 12,
                  marginTop: 4,
                }}
              >
                Events </Text>
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                paddingTop: 10,
              }}
            >
              <Ionicons
                name={focused ? "person" : "person-circle-outline"}
                color={focused ? "#ff2c5f" : "gray"}
                size={28}
              />
              <Text
                style={{
                  color: focused ? "#ff2c5f" : "gray",
                  fontSize: 12,
                  marginTop: 4,
                }}
              >
                Profile </Text>
            </View>
          ),
        }}
      />
    </Tabs>
  );
}
