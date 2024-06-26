// CustomHeader.tsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";



const CustomHeader: React.FC<{ title: string }> = ({ title }) => {
  return (
    <View style={styles.header } className="flex-row justify-between px-5">
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingTop: 40,
    height: 100,
    backgroundColor: "#ff2c5f",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
   
  },
  title: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default CustomHeader;
