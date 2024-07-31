import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Link, Stack } from 'expo-router'
import { Colors } from '@/constants/Colors'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
const Layout = () => {
  return (
    <GestureHandlerRootView>
      <Stack>
      <Stack.Screen name= '[id]' options={{
            title: '',   
            headerShown: true, 
        }}
        />
      </Stack>
    </GestureHandlerRootView>
  )
}



export default Layout