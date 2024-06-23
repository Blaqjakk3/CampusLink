import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import React from 'react';

const CustomButton = ({ title, handlePress, containerStyles, textStyles, isLoading }) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.6}
      style={[styles.CustomButton, containerStyles]} // Combine styles
      disabled={isLoading}
    >
      <Text style={[styles.buttonText, textStyles]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  CustomButton: {
    backgroundColor: '#ff2c5f',
    paddingHorizontal: 20, // Adjust padding for desired button width
    paddingVertical: 15, // Adjust padding for desired button height
    borderRadius: 5, // Set a fixed border radius
    minWidth: 120, // Set a minimum width to prevent shrinking
  },
  buttonText: {
    color: '#fff',
    fontSize: 16, // Adjust font size for button text
    textAlign: 'center',
  },
});

export default CustomButton;
