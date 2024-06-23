import { StatusBar } from "expo-status-bar";
import { Text, View, Image } from "react-native";
import { Redirect, router } from 'expo-router';
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import { blue } from "react-native-reanimated/lib/typescript/reanimated2/Colors";
import { StyleSheet } from "react-native";
import CustomButton from "@/components/CustomButton";
import 'react-native-url-polyfill/auto'


const logoImg = require("../assets/images/logo2.png");
//declaring a function for the logo image

const friendsImg = require("../assets/images/friends.png");
//declaring a function for the classroom image


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={logoImg} style={styles.logo} resizeMode="contain" />

      <Image source={friendsImg} style={styles.classroom} />

      <View style={styles.textContainer}>
        <Text style={styles.titleText}>Build Great Connections!</Text>
        <Text style={styles.subText}>
          Unlock your university experience: Find study buddies and collaborators
        </Text>
      </View>

      <CustomButton
        title="Get Started! "
        handlePress={() => router.push('./(auth)/signin')}
        containerStyles="w-full mt-3" // Adjust margin-top for desired spacing
        textStyles={undefined} isLoading={undefined}      />

      <StatusBar style="dark" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Make the container take up the whole screen
    justifyContent: 'center', // Center elements along the main axis (vertical in this case)
    alignItems: 'center', // Center elements along the cross axis (horizontal in this case)
    marginTop: 120,
  },
  logo: {
    width: 70,
    height: 70,
    top: -200, // sending the logo up the page a bit
  },
  classroom: {
    width: "100%",
    height: "40%",
    top: -180,
  },
  textContainer: {
    marginTop: 20, // Adjust spacing between image and text
  },
  titleText: {
    fontSize: 24, // Adjust font size for title
    fontWeight: 'bold',
    textAlign: 'center',
    top: -170, // Add spacing between title and subtext
  },
  subText: {
    fontSize: 16, // Adjust font size for subtext
    textAlign: 'center',
    color: 'gray', // Adjust subtext color
    top: -160,
  },




});
