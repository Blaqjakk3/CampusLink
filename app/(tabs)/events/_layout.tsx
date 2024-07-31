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
          headerTitle: 'Events',
          headerShown: true,
          headerLargeTitle: true,
          headerStyle: styles.header,
          headerRight: () => (
            <View style={styles.headerRight}>
            <Link href="create" asChild>
            <TouchableOpacity  style={styles.headerRightButton}>
              <Ionicons name="add-circle" size={20} color="black" />
            </TouchableOpacity>
            </Link>
            </View>
  )}} />
      </Stack>
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.primary,
  },
  headerRight: {
    marginRight: 7, // Adjust the margin as needed
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerRightButton:{
    marginHorizontal: 10,
  },
})

export default Layout