import { Ionicons } from "@expo/vector-icons";
import { Tabs, useRootNavigationState } from "expo-router";
import React from "react";
import { View, Text, Platform } from "react-native";
import Friends from "./friends";
import Events from "./events";
import Profile from "./profile";
import CustomHeader from "../../components/CustomHeader"; // Import the custom header
import { Colors } from "@/constants/Colors";
import { useNavigationState, useRoute } from "@react-navigation/native";




export default function Layout() {
  const state = useNavigationState((state) => state);

  

  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
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
          display: state.routeNames[2] === 'friends/[id]' ? 'none' : 'flex',
          },
        header: () => {
          let title = route.name.charAt(0).toUpperCase() + route.name.slice(1);
         
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
                color={focused ? Colors.primary : "gray"}
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
                Events
              </Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="skills"
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                paddingTop: 10,
              }}
            >
              <Ionicons
                name={focused ? "bulb" : "bulb-outline"}
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
                Skills
              </Text>
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
                Profile
              </Text>
            </View>
          ),
        }}
      />
    </Tabs>
  );
}
