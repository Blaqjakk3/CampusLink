import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet, Alert, Image } from 'react-native';
import { getAllUsers, sendFriendRequest, getCurrentUser, getFriends, getUserFriendRequests } from '@/lib/appwrite';

const SendRequestScreen = () => {
    const [users, setUsers] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);
    const [sentRequests, setSentRequests] = useState({});
    const [receivedRequests, setReceivedRequests] = useState({});

    useEffect(() => {
        const fetchCurrentUser = async () => {
            try {
                const user = await getCurrentUser();
                setCurrentUser(user);
                await fetchUsers(user.$id);
            } catch (error) {
                console.error('Error fetching current user:', error);
            }
        };

        const fetchUsers = async (currentUserId) => {
            try {
                const allUsers = await getAllUsers();
                const friends = await getFriends(currentUserId);
                const friendIds = friends.map(friend => 
                    friend.userId1 === currentUserId ? friend.userId2 : friend.userId1
                );

                const { sentRequests, receivedRequests } = await getUserFriendRequests(currentUserId);
                const requestIds = [
                    ...sentRequests.map(req => req.toUserId),
                    ...receivedRequests.map(req => req.fromUserId)
                ];

                const filteredUsers = allUsers.filter(user => 
                    !friendIds.includes(user.$id) && 
                    !requestIds.includes(user.$id) && 
                    user.$id !== currentUserId
                );

                setUsers(filteredUsers);
                setSentRequests(sentRequests.reduce((acc, req) => ({ ...acc, [req.toUserId]: true }), {}));
                setReceivedRequests(receivedRequests.reduce((acc, req) => ({ ...acc, [req.fromUserId]: true }), {}));
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchCurrentUser();
    }, []);

    const handleAddFriend = async (toUserId) => {
        try {
            const fromUserId = currentUser.$id;
            const friendRequest = await sendFriendRequest(fromUserId, toUserId);
            setSentRequests(prevState => ({ ...prevState, [toUserId]: true }));
            Alert.alert('Friend request sent', 'You have sent a friend request');
        } catch (error) {
            console.error('Error sending friend request:', error);
            Alert.alert('Error', 'Failed to send friend request');
        }
    };

    const renderItem = ({ item }) => (
        <View style={styles.userContainer}>
            <Image source={{ uri: item.avatar }} style={styles.avatar} />
            <View style={styles.userInfo}>
                <Text style={styles.userName}>{item.fullname}</Text>
                <Text style={styles.userDetail}>{item.programme}</Text>
                <Text style={styles.userDetail}>{item.school} | Year {item.yearOfstudy}</Text>
            </View>
            <Button
                title={sentRequests[item.$id] ? "Request Sent" : "Add Friend"}
                onPress={() => handleAddFriend(item.$id)}
                disabled={sentRequests[item.$id] || receivedRequests[item.$id]}
            />
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={users}
                keyExtractor={(item) => item.$id}
                renderItem={renderItem}
                ListEmptyComponent={<Text>No users found</Text>}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    userContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f9f9f9',
        borderRadius: 10,
        padding: 10,
        marginVertical: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 2,
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

export default SendRequestScreen;
