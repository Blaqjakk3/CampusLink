import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '@/context/GlobalProvider';
import { signOut, getCurrentUser } from '@/lib/appwrite';
import { router } from 'expo-router';
import icons from '@/constants/icons.js';

// Define the type for user profile data
interface UserProfile {
  avatar: string;
  fullname: string;
  dateOfbirth: string;
  programme: string;
  school: string;
  yearOfstudy: string;
}

// Helper function to format the date
const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString(); // Formats to MM/DD/YYYY or similar
}

const Profile = () => {
  const { user, setUser, setIsLogged } = useGlobalContext();
  const [profileData, setProfileData] = useState<UserProfile | null>(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const currentUser = await getCurrentUser();
        setProfileData(currentUser);
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    fetchUserProfile();
  }, []);

  const logout = async () => {
    await signOut();
    setUser(null);
    setIsLogged(false);
    router.replace('/signin');
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Profile</Text>
        <TouchableOpacity onPress={logout} style={styles.logoutButton}>
          <Image source={icons.logout} resizeMode="contain" style={styles.logoutIcon} />
        </TouchableOpacity>
      </View>

      {/* Profile Details */}
      {profileData && (
        <View style={styles.profileDetails}>
          <Image source={{ uri: profileData.avatar }} style={styles.avatar} />
          <Text style={styles.fullname}>{profileData.fullname}</Text>
          <Text style={styles.details}>Date of Birth: {formatDate(profileData.dateOfbirth)}</Text>
          <Text style={styles.details}>Programme: {profileData.programme}</Text>
          <Text style={styles.details}>School: {profileData.school}</Text>
          <Text style={styles.details}>Year: {profileData.yearOfstudy}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  logoutButton: {
    padding: 8,
  },
  logoutIcon: {
    width: 24,
    height: 24,
  },
  profileDetails: {
    alignItems: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
  fullname: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  details: {
    fontSize: 16,
    marginBottom: 4,
  },
});

export default Profile;
