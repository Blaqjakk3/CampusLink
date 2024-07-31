import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { getCurrentUser, getFriends } from '@/lib/appwrite';
import { useNavigation } from '@react-navigation/native';

const Friends = () => {
  const [friends, setFriends] = useState([]);
  const [userId, setUserId] = useState<string | null>(null);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchFriends = async () => {
      if (userId) {
        try {
          const friendsList = await getFriends(userId);
          setFriends(friendsList);
        } catch (error) {
          console.error('Failed to fetch friends:', error);
        }
      }
    };

    const fetchUserId = async () => {
      const user = await getCurrentUser();
      setUserId(user.$id);
    };

    fetchUserId().then(fetchFriends);
  }, [userId]);

  const handlePress = (friend) => {
    navigation.navigate('FriendChat', { 
      friendId: friend.$id, 
      avatar: friend.avatar, 
      fullname: friend.fullname 
    });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handlePress(item)}>
      <View style={styles.userContainer}>
        <Image source={{ uri: item.avatar }} style={styles.avatar} />
        <View style={styles.userInfo}>
          <Text style={styles.userName}>{item.fullname}</Text>
          <Text style={styles.userDetail}>{item.programme}</Text>
          <Text style={styles.userDetail}>{item.school} | Year {item.yearOfstudy}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={friends}
        keyExtractor={(item) => item.$id}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    padding: 10,
    marginVertical: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  userDetail: {
    fontSize: 14,
    color: '#666',
  },
});

export default Friends;
