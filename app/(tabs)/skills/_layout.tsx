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
        <Stack.Screen name="index" options={{
          headerTitle: 'Skills',
          headerShown: true,
          headerLargeTitle: true,
          headerStyle: styles.header,
        }} />
         <Stack.Screen name="tech" options={{
          headerTitle: 'Tech Skills',
          headerShown: true,
          headerLargeTitle: true,
          headerStyle: styles.header,
        }} />
         <Stack.Screen name="communication" options={{
          headerTitle: 'Communication Skills',
          headerShown: true,
          headerLargeTitle: true,
          headerStyle: styles.header,
        }} />
         <Stack.Screen name="social" options={{
          headerTitle: 'Social Skills',
          headerShown: true,
          headerLargeTitle: true,
          headerStyle: styles.header,
        }} />
         <Stack.Screen name="culinary" options={{
          headerTitle: 'Culinary Skills',
          headerShown: true,
          headerLargeTitle: true,
          headerStyle: styles.header,
        }} />
         <Stack.Screen name="others" options={{
          headerTitle: 'Other Skills',
          headerShown: true,
          headerLargeTitle: true,
          headerStyle: styles.header,
        }} />
         <Stack.Screen name="eca" options={{
          headerTitle: 'Extra-Curricular Activities',
          headerShown: true,
          headerLargeTitle: true,
          headerStyle: styles.header,
        }} />
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
        <Stack.Screen name="writing" options={{
          headerTitle: 'Writing',
          headerShown: true,
          headerLargeTitle: true,
          headerStyle: styles.header,
        }} />
         <Stack.Screen name="presenting" options={{
          headerTitle: 'Presenting',
          headerShown: true,
          headerLargeTitle: true,
          headerStyle: styles.header,
        }} />
         <Stack.Screen name="negotiating" options={{
          headerTitle: 'Negotiating',
          headerShown: true,
          headerLargeTitle: true,
          headerStyle: styles.header,
        }} />
         <Stack.Screen name="activelistening" options={{
          headerTitle: 'Active Listening',
          headerShown: true,
          headerLargeTitle: true,
          headerStyle: styles.header,
        }} />
            <Stack.Screen name="photography" options={{
          headerTitle: 'Photography',
          headerShown: true,
          headerLargeTitle: true,
          headerStyle: styles.header,
        }} />
         <Stack.Screen name="diy" options={{
          headerTitle: 'DIY Projects',
          headerShown: true,
          headerLargeTitle: true,
          headerStyle: styles.header,
        }} />
          <Stack.Screen name="sports" options={{
          headerTitle: 'Sports',
          headerShown: true,
          headerLargeTitle: true,
          headerStyle: styles.header,
        }} />
          <Stack.Screen name="music" options={{
          headerTitle: 'Music',
          headerShown: true,
          headerLargeTitle: true,
          headerStyle: styles.header,
        }} />
          <Stack.Screen name="arts" options={{
          headerTitle: 'Arts and Crafts',
          headerShown: true,
          headerLargeTitle: true,
          headerStyle: styles.header,
        }} />
         <Stack.Screen name="cooking" options={{
          headerTitle: 'Cooking',
          headerShown: true,
          headerLargeTitle: true,
          headerStyle: styles.header,
        }} />
         <Stack.Screen name="baking" options={{
          headerTitle: 'Baking',
          headerShown: true,
          headerLargeTitle: true,
          headerStyle: styles.header,
        }} />
         <Stack.Screen name="mealplanning" options={{
          headerTitle: 'Meal Planning',
          headerShown: true,
          headerLargeTitle: true,
          headerStyle: styles.header,
        }} />
         <Stack.Screen name="foodsafety" options={{
          headerTitle: 'Food Safety',
          headerShown: true,
          headerLargeTitle: true,
          headerStyle: styles.header,
        }} />
         <Stack.Screen name="publicspeaking" options={{
          headerTitle: 'Public Speaking',
          headerShown: true,
          headerLargeTitle: true,
          headerStyle: styles.header,
        }} />
         <Stack.Screen name="teamwork" options={{
          headerTitle: 'Teamwork',
          headerShown: true,
          headerLargeTitle: true,
          headerStyle: styles.header,
        }} />
         <Stack.Screen name="networking" options={{
          headerTitle: 'Networking',
          headerShown: true,
          headerLargeTitle: true,
          headerStyle: styles.header,
        }} />
         <Stack.Screen name="conflictresolution" options={{
          headerTitle: 'Conflict Resolution',
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