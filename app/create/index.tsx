import { View, Text, StyleSheet, Button, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import FormField from '@/components/FormField';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Image } from 'react-native';
import CustomButton from '@/components/CustomButton';
import icons from '@/constants/icons.js';
import * as ImagePicker from 'expo-image-picker';
import { router } from 'expo-router';
import { useGlobalContext } from '@/context/GlobalProvider';
import { createEvent } from '@/lib/appwrite';

const CreateEvent = () => {
  const { user } = useGlobalContext();
  const [uploading, setUploading] = useState(false);
  const [form, setForm] = useState({
    eventname: '',
    location: '',
    datetime: new Date(),
    about: '',
    flyer: null,
    links: [],
    organizer: '',
    organizerContact: [''],
    school: '',
  });

  const openPicker = async (selectType) => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: selectType === 'image' ? ImagePicker.MediaTypeOptions.Images : undefined,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      if (selectType === 'image') {
        setForm({ ...form, flyer: result.assets[0] });
      }
    }
  };

  const submit = async () => {
    setUploading(true);

    try {
      await createEvent({
        ...form, userId: user.$id
      });

      Alert.alert('Success', 'Event created!');
      router.push('/events');
    } catch (error) {
      Alert.alert('Error', error.message);
    } finally {
      setForm({
        eventname: '',
        location: '',
        datetime: new Date(),
        about: '',
        flyer: null,
        links: [],
        organizer: '',
        organizerContact: [''],
        school: '',
      });
      setUploading(false);
    }
  };

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const schools = [
    { label: 'University of Ghana', value: 'UG' },
    { label: 'Kwame Nkrumah University of Science and Technology', value: 'KNUST' },
    { label: 'University of Cape Coast', value: 'UCC' },
    // Add more schools as needed
  ];

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || form.datetime;
    setShowDatePicker(false);
    setForm({ ...form, datetime: currentDate });
  };

  const onTimeChange = (event, selectedTime) => {
    const currentTime = selectedTime || form.datetime;
    setShowTimePicker(false);
    setForm({ ...form, datetime: currentTime });
  };

  const addLink = () => {
    setForm({ ...form, links: [...form.links, ''] });
  };

  const handleLinkChange = (text, index) => {
    const newLinks = [...form.links];
    newLinks[index] = text;
    setForm({ ...form, links: newLinks });
  };

  const addContact = () => {
    setForm({ ...form, organizerContact: [...form.organizerContact, ''] });
  };

  const handleContactChange = (text, index) => {
    const newContacts = [...form.organizerContact];
    newContacts[index] = text.replace(/[^0-9]/g, ''); // Allow only numbers
    setForm({ ...form, organizerContact: newContacts });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.container}>
          <FormField
            title="Event Name"
            value={form.eventname}
            placeholder="Event Name here..."
            handleChangeText={(e) => setForm({ ...form, eventname: e })}
            otherStyles={styles.formField}
          />
          <View style={styles.formField}>
            <Text style={styles.label}>School</Text>
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={form.school}
                onValueChange={(value) => setForm({ ...form, school: value })}
                style={styles.picker}
              >
                <Picker.Item label="Select a school..." value={null} />
                {schools.map((school) => (
                  <Picker.Item key={school.value} label={school.label} value={school.value} />
                ))}
              </Picker>
            </View>
          </View>
          <FormField
            title="Event Location"
            value={form.location}
            placeholder="Event Location here..."
            handleChangeText={(e) => setForm({ ...form, location: e })}
            otherStyles={styles.formField}
          />
          <View style={styles.formField}>
            <Text style={styles.label}>Event Date and Time</Text>
            <Button onPress={() => setShowDatePicker(true)} title="Select Date" />
            {showDatePicker && (
              <DateTimePicker
                value={form.datetime}
                mode="date"
                display="default"
                onChange={onDateChange}
              />
            )}
            <Button onPress={() => setShowTimePicker(true)} title="Select Time" />
            {showTimePicker && (
              <DateTimePicker
                value={form.datetime}
                mode="time"
                display="default"
                onChange={onTimeChange}
              />
            )}
            <Text>{`Selected Date and Time: ${form.datetime.toLocaleString()}`}</Text>
          </View>
          <FormField
            title="About Event"
            value={form.about}
            placeholder="Enter Summary of Event"
            handleChangeText={(e) => setForm({ ...form, about: e })}
            otherStyles={styles.formField}
          />
          <View style={[styles.formField, styles.uploadSection]}>
            <Text style={styles.label}>Event Flyer</Text>
            <TouchableOpacity onPress={() => openPicker('image')}>
              {form.flyer ? (
                <Image
                  source={{ uri: form.flyer.uri }}
                  resizeMode="cover"
                  style={styles.flyerImage}
                />
              ) : (
                <View style={styles.uploadContainer}>
                  <Image source={icons.upload} style={styles.uploadicon} />
                  <Text> Choose a file</Text>
                </View>
              )}
            </TouchableOpacity>
          </View>
          <FormField
            title="Organizer"
            value={form.organizer}
            placeholder="Organizer Name"
            handleChangeText={(e) => setForm({ ...form, organizer: e })}
            otherStyles={styles.formField}
          />
          <View style={styles.formField}>
            <Text style={styles.label}>Organizer Contact</Text>
            {form.organizerContact.map((contact, index) => (
              <FormField
                key={index}
                title={`Contact ${index + 1}`}
                value={contact}
                placeholder="Enter contact number"
                handleChangeText={(e) => handleContactChange(e, index)}
                keyboardType="numeric"
                otherStyles={styles.formField}
              />
            ))}
            <Button onPress={addContact} title="Add Another Contact" />
          </View>
          <View style={styles.formField}>
            <Text style={styles.label}>Event Links</Text>
            {form.links.map((link, index) => (
              <FormField
                key={index}
                title={`Link ${index + 1}`}
                value={link}
                placeholder="Enter link"
                handleChangeText={(e) => handleLinkChange(e, index)}
                otherStyles={styles.formField}
              />
            ))}
            <Button onPress={addLink} title="Add Another Link" />
          </View>
          <View style={styles.button}>
            <CustomButton
              title="Create & Publish"
              handlePress={submit}
              containerStyles="mt-7"
              isLoading={uploading}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollView: {
    paddingHorizontal: 16,
    paddingVertical: 3, // Increased vertical padding
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  formField: {
    marginVertical: 12, // Increased margin to add space between components
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    paddingVertical: 4, // Added padding inside the picker container
  },
  picker: {
    height: 50,
    width: '100%',
  },
  uploadSection: {
    marginTop: 24, // Increased top margin for more space
  },
  flyerImage: {
    width: '100%',
    height: 200, // Adjusted height for a better aspect ratio
    borderRadius: 4,
  },
  uploadContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16, // Increased padding for better visual balance
  },
  uploadicon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  button: {
    marginVertical: 20, // Increased vertical margin for spacing
  },
});

export default CreateEvent;
