// CustomHeader.tsx
import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const CustomHeader: React.FC<{ title: string }> = ({ title }) => {
  const insets = useSafeAreaInsets();

  return (
    <>
      <StatusBar backgroundColor="#ff2c5f" barStyle="light-content" />
      <View style={[styles.header, { paddingTop: insets.top + 10 }]} className="flex-row justify-between px-5">
        <Text style={styles.title}>{title}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 100,
    backgroundColor: "#ff2c5f",
    borderBottomLeftRadius: 20,
    paddingBottom: 10,
    borderBottomRightRadius: 20
  },
  title: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default CustomHeader;
