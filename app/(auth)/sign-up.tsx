import { View, Text, Image, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import FormField from '@/components/FormField';
import CustomButton from '@/components/CustomButton';
import { Link, router } from 'expo-router';
import { KeyboardAvoidingView } from 'react-native';
import { createUser } from '@/lib/appwrite';
import { Picker } from '@react-native-picker/picker';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import DateTimePicker from '@react-native-community/datetimepicker';

const logoImg = require("../../assets/images/logo2.png");

const SignUp = () => {
  const [form, setForm] = useState({
    fullname: '',
    email: '',
    password: '',
    dateOfbirth: '',
    yearOfstudy: '',
    programme: '',
    school: '',
  });

  const [isSubmitting, setisSubmitting] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const submit = async () => {
    if (!form.fullname || !form.email || !form.password || !form.dateOfbirth || !form.yearOfstudy || !form.programme || !form.school) {
      Alert.alert('Error', 'Please fill in all the fields');
      return;
    }

    setisSubmitting(true);
    try {
      const result = await createUser(
        form.fullname,
        form.email,
        form.password,
        form.dateOfbirth,
        parseInt(form.yearOfstudy, 10),
        form.programme,
        form.school,
      );
      router.replace('../(tabs)/friends');
    } catch (error) {
      Alert.alert('Error', error.message);
    } finally {
      setisSubmitting(false);
    }
  }

  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    if (event.type === 'set') {
      const currentDate = selectedDate || new Date();
      setForm({ ...form, dateOfbirth: currentDate.toISOString().split('T')[0] });
    }
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView className='h-full'>
        <ScrollView style={{ flex: 1 }}>
          <View style={{ marginTop: 7 }} className='w-full min-h-[80vh] px-4 py-6 justify-center'>
            <Image source={logoImg} style={styles.logo} />
            <Text className='text-2xl font-semibold mt-10 font-psemibold'>Sign-Up To CampusLink</Text>

            <KeyboardAvoidingView keyboardVerticalOffset={30}>
              <FormField
                title="Full Name"
                value={form.fullname}
                handleChangeText={(e) => setForm({ ...form, fullname: e })}
                otherStyles="mt-10"
              />

              <FormField
                title="Email"
                value={form.email}
                handleChangeText={(e) => setForm({ ...form, email: e })}
                otherStyles="mt-7"
                keyBoardType="email-address"
              />

              <FormField
                title="Password"
                value={form.password}
                handleChangeText={(e) => setForm({ ...form, password: e })}
                otherStyles="mt-7"
                secureTextEntry
              />
              <FormField
                title="Year of Study"
                value={form.yearOfstudy}
                handleChangeText={(e) => setForm({ ...form, yearOfstudy: e })}
                otherStyles="mt-7"
                keyBoardType="numeric"
              />

              <View style={{ marginTop: 15 }}>
                <Text style={styles.label}>Date of Birth</Text>
                <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.dateInput}>
                  <Text>{form.dateOfbirth ? form.dateOfbirth : "Select Date"}</Text>
                </TouchableOpacity>
                {showDatePicker && (
                  <DateTimePicker
                    value={form.dateOfbirth ? new Date(form.dateOfbirth) : new Date()}
                    mode="date"
                    display="default"
                    onChange={handleDateChange}
                  />
                )}
              </View>
              <View style={[styles.pickerContainer, { marginTop: 15 }]}>
                <Text style={styles.label}>Programme</Text>
                <Picker
                  selectedValue={form.programme}
                  style={styles.picker}
                  onValueChange={(itemValue) => setForm({ ...form, programme: itemValue })}
                >
                  <Picker.Item label="Select a programme" value="" />
                  <Picker.Item label="Computer Science" value="Computer Science" />
                  <Picker.Item label="Business Administration" value="Business Administration" />
                  <Picker.Item label="Mechanical Engineering" value="Mechanical Engineering" />
                  <Picker.Item label="Civil Engineering" value="Civil Engineering" />
                  <Picker.Item label="Electrical Engineering" value="Electrical Engineering" />
                  <Picker.Item label="Biology" value="Biology" />
                  <Picker.Item label="Human Biology" value="Human Biology" />
                  <Picker.Item label="Math" value="Math" />
                  <Picker.Item label="Chemistry" value="Chemistry" />
                  <Picker.Item label="Computer Engineering" value="Computer Engineering" />
                  <Picker.Item label="Electrical Engineering" value="Electrical Engineering" />
                  <Picker.Item label="Stastistics" value="Stastistics" />
                  <Picker.Item label="Economics" value="Economics" />
                  <Picker.Item label="French" value="French" />
                  {/* Add more courses as needed */}
                </Picker>
              </View>

              <View style={[styles.pickerContainer, { marginTop: 15 }]}>
                <Text style={styles.label}>School</Text>
                <Picker
                  selectedValue={form.school}
                  style={styles.picker}
                  onValueChange={(itemValue) => setForm({ ...form, school: itemValue })}
                >
                  <Picker.Item label="Select a school" value="" />
                  <Picker.Item label="UG" value="University of Ghana" />
                  <Picker.Item label="KNUST" value="Kwame Nkrumah University of Science and Technology" />
                  <Picker.Item label="UCC" value="University of Cape Coast" />
                  <Picker.Item label="UEW" value="University of Education, Winneba" />
                  <Picker.Item label="GIMPA" value="Ghana Institute of Management and Public Administration" />
                  <Picker.Item label="UPSA" value="University of Professional Studies, Accra" />
                  <Picker.Item label="UMaT" value="University of Mines and Technology" />
                  <Picker.Item label="UENR" value="University of Energy and Natural Resources" />
                  <Picker.Item label="UDS" value="University for Development Studies" />
                  <Picker.Item label="Ashesi" value="Ashesi University" />

                  {/* Add more schools as needed */}
                </Picker>
              </View>


              <View style={{ marginTop: 11 }}>
                <CustomButton
                  title={"Sign Up"}
                  handlePress={submit}
                  containerStyles={"mt-7"}
                  isLoading={isSubmitting}
                />
              </View>

              <View className='justify-center pt-5 flex-row gap-2'>
                <Text> Have an account already?
                  <Link href={"/signin"} style={{ color: '#ff2c5f' }} className='text-lg font-psemibold '>   Sign In </Link>
                </Text>
              </View>
            </KeyboardAvoidingView>
          </View>
        </ScrollView>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 80,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
  },
  label: {
    marginBottom: 5,
    fontSize: 16,
    color: '#333',
  },
  picker: {
    height: 50,
    width: '100%',
  },
  dateInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    justifyContent: 'center',
    height: 50,
  },
});

export default SignUp;
