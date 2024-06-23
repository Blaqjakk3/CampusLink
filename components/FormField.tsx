import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons'
import {GestureHandlerRootView} from 'react-native-gesture-handler'


const FormField = ({title, value, placeholder,
    handleChangeText, otherStyles, ...props}) => {

const [showPassword, setshowPassword] = useState(false)
const [showConfirmPassword, setshowConfirmPassword] = useState(false)


  return (
    <GestureHandlerRootView style={{ flex: 0 }}>
    <View className='space-y-2'>
     <Text style={{ color: '#ff2c5f' }} className="text-base font-pmedium">{title}</Text>
     
     
     <View style={{borderColor: 'black'  }} className='border-2 w-full h-16 px-4 bg-gray-100
     rounded-2xl focus:border-secondary items-center flex-row'>
<TextInput 
className='flex-1 text-black font-psemibold text-base'
value={value}
placeholder={placeholder}
placeholderTextColor="#ff2c5f"
onChangeText={handleChangeText}
secureTextEntry={title === 'Password' ? !showPassword : title === 'Confirm Password' ? !showConfirmPassword : false}

/>
{title === 'Password' && (
        <TouchableOpacity
          onPress={() => setshowPassword(!showPassword)}
          style={{ /* Optional styling for the button */ }}
        >
          {showPassword ? (
            <Ionicons name="eye-off-outline" size={24}  />
          ) : (
            <Ionicons name="eye-outline" size={24} />
          )}
        </TouchableOpacity>
      )}


      

{title === 'Confirm Password' && (
        <TouchableOpacity
          onPress={() => setshowConfirmPassword(!showConfirmPassword)}
          style={{ /* Optional styling for the button */ }}
        >
          {showConfirmPassword ? (
            <Ionicons name="eye-off-outline" size={24}  />
          ) : (
            <Ionicons name="eye-outline" size={24} />
          )}
        </TouchableOpacity>
      )}



     </View>
 </View>
 </GestureHandlerRootView>
  )
}

export default FormField