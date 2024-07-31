import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet, Alert, Image } from 'react-native';
import {
    getReceivedFriendRequests,
    acceptFriendRequest,
    rejectFriendRequest,
    getCurrentUser,
    getUserById
} from '@/lib/appwrite';

const ReceivedRequestsScreen = () => {
    const [requests, setRequests] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        // Fetch received friend requests
        const fetchFriendRequests = async () => {
            try {
                const user = await getCurrentUser();
                setCurrentUser(user);
                const friendRequests = await getReceivedFriendRequests(user.$id);

                // Fetch user details for each friend request
                const details = await Promise.all(friendRequests.map(async (request) => {
                    const userDetails = await getUserById(request.fromUserId);
                    return { 
                        ...request, 
                        fromUserName: userDetails.fullname, 
                        fromUserSchool: userDetails.school, 
                        fromUserProgramme: userDetails.programme, 
                        fromUserYear: userDetails.yearOfstudy,
                        fromUserAvatar: userDetails.avatar 
                    };
                }));

                setRequests(details);
            } catch (error) {
                console.error('Error fetching friend requests:', error);
            }
        };

        fetchFriendRequests();
    }, []);

    // Handle accept friend request
    const handleAccept = async (requestId, fromUserId) => {
        try {
            await acceptFriendRequest(requestId, fromUserId, currentUser.$id);
            setRequests(prevRequests => prevRequests.filter(request => request.$id !== requestId));
            Alert.alert('Friend request accepted');
        } catch (error) {
            console.error('Error accepting friend request:', error);
            Alert.alert('Error', 'Failed to accept friend request');
        }
    };

    // Handle reject friend request
    const handleReject = async (requestId) => {
        try {
            await rejectFriendRequest(requestId);
            setRequests(prevRequests => prevRequests.filter(request => request.$id !== requestId));
            Alert.alert('Friend request rejected');
        } catch (error) {
            console.error('Error rejecting friend request:', error);
            Alert.alert('Error', 'Failed to reject friend request');
        }
    };

    const renderItem = ({ item }) => (
        <View style={styles.requestContainer}>
            <Image source={{ uri: item.fromUserAvatar }} style={styles.avatar} />
            <View style={styles.userInfo}>
                <Text style={styles.userName}>{item.fromUserName}</Text>
                <Text style={styles.userDetail}>{item.fromUserProgramme}</Text>
                <Text style={styles.userDetail}>{item.fromUserSchool} - Year {item.fromUserYear}</Text>
            </View>
            <View style={styles.buttonsContainer}>
                <Button
                    title="Accept"
                    onPress={() => handleAccept(item.$id, item.fromUserId)}
                />
                <Button
                    title="Reject"
                    onPress={() => handleReject(item.$id)}
                />
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={requests}
                keyExtractor={(item) => item.$id}
                renderItem={renderItem}
                ListEmptyComponent={<Text>No friend requests found</Text>}
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
    requestContainer: {
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
    buttonsContainer: {
        flexDirection: 'row',
        gap: 10,
    },
});

export default ReceivedRequestsScreen;
