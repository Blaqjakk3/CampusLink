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
        <Stack.Screen name="dataanalysis" options={{
          headerTitle: 'Data Analysis',
          headerShown: true,
          headerLargeTitle: true,
          headerStyle: styles.header,
        }} />
         <Stack.Screen name="languages" options={{
          headerTitle: 'Programming Languages',
          headerShown: true,
          headerLargeTitle: true,
          headerStyle: styles.header,
        }} />
         <Stack.Screen name="machinelearning" options={{
          headerTitle: 'Machine Learning',
          headerShown: true,
          headerLargeTitle: true,
          headerStyle: styles.header,
        }} />
         <Stack.Screen name="webdev" options={{
          headerTitle: 'Web Development',
          headerShown: true,
          headerLargeTitle: true,
          headerStyle: styles.header,
        }} />
      </Stack>
      
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.primary,
  },
  headerRight: {
    marginRight: 20, // Adjust the margin as needed
  }
})

export default Layout