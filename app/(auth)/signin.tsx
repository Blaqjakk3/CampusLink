import { View, Text, Image, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import FormField from '@/components/FormField';
import CustomButton from '@/components/CustomButton';
import { Link } from 'expo-router';
import { KeyboardAvoidingView } from 'react-native';
import { Alert } from 'react-native';
import { SignIn } from '@/lib/appwrite';
import { useRouter } from 'expo-router';
import { useFocusEffect } from '@react-navigation/native';
import { deleteCurrentSession } from '@/lib/appwrite';


const logoImg = require("../../assets/images/logo2.png");
//declaring a function for the logo image

const signin= () => {
const[form, setForm] = useState({
  email: '',
  password: '',
})

const [isSubmitting, setisSubmitting] = useState(false)
const router = useRouter();

useFocusEffect(
  React.useCallback(() => {
    const handleFocus = async () => {
      await deleteCurrentSession();
    };

    handleFocus();

    return () => {
      // Any cleanup logic goes here if needed
    };
  }, [])
);





const submit = async () => {
  if ( !form.email || !form.password ) {
    Alert.alert('Error', 'Please fill in all the fields');
    return;
  }

  setisSubmitting(true);

  try {
     await SignIn(
      form.email,
      form.password,
    );
    router.replace('../../(tabs)/friends');
  } catch (error) {
    Alert.alert('Error', error.message);
  } finally {
    setisSubmitting(false);
  }
}

  return (
   
    <SafeAreaView className='h-full'>
      <View style={{marginTop: 7}} className='w-full min-h-[80vh] px-4 py-6 justify-center'>
        <Image source={logoImg} style={styles.logo} />
        <Text className='text-2xl font-semibold mt-10 font-psemibold'>Sign-In to CampusLink</Text>
      
        <KeyboardAvoidingView 
    keyboardVerticalOffset={30}
    behavior="padding">
      <FormField
      title="Email"
      value={form.email}
      handleChangeText={(e) => setForm({...form,
        email: e})}
        otherStyles= "mt-7"
        keyBoardType= "email-address"
        placeholder=" "
      />

      <FormField
      title="Password"
      value={form.password}
      handleChangeText={(e) => setForm({...form,
        password: e})}
        otherStyles= "mt-7"
        placeholder=" "
      />
<View style={{marginTop: 11}}>
      <CustomButton
      title={"Sign In"}
      handlePress={submit}
      containerStyles={"mt-7"}
      isLoading={isSubmitting}
      textStyles={"text-white"}
      />
</View>

<View className='justify-center pt-5 flex-row gap-2'>
<Text> Don't have account?  
<Link href={"/sign-up"} style= {{color: '#ff2c5f'}}
className='text-lg font-psemibold '
>   Sign Up  </Link>
    </Text>

</View>
</KeyboardAvoidingView>
      </View>
    </SafeAreaView>
    
  );
};


const styles = StyleSheet.create({
  logo:{
    width: 80,
    height: 80,
  },
})

export default signin