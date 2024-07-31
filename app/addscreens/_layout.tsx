import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Link, Stack, useNavigation } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

const _layout = () => {
  const navigation = useNavigation();

  return (
    <GestureHandlerRootView>
      <Stack>
        <Stack.Screen 
          name="index" 
          options={{
            headerShown: false,
            headerLargeTitle: true,
          
          }} 
        />
      </Stack>
    </GestureHandlerRootView>
  )
}

export default _layout
