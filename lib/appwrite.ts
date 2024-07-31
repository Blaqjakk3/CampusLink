import { Platform } from "react-native";
import { Account, Avatars, Client, Databases, ID, Query, Storage } from 'react-native-appwrite';

export const config = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.sandcj.campusLink',
    projectId: '665a205000004ae07bb7',
    databaseId: '665a23f10004a468ad76',
    usersCollectionId: '665a24180038f8c9a53a',
    eventsCollectionId: '669f9c9a001dcf9973be',
    friendsCollectionId: '665a26cc00069d6fdd57',
    messagesCollectionId: '665a2752002ec2beb332',
    friend_requestsCollectionId: '66a51a580032938f8351',
    storageId: '665a50ab0004d3a61e77',
};

const {
    endpoint,
    platform,
    projectId,
    databaseId,
    usersCollectionId,
    eventsCollectionId,
    friendsCollectionId,
    friend_requestsCollectionId,
    messagesCollectionId,
    storageId,
} = config;

// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(endpoint) // Your Appwrite Endpoint
    .setProject(projectId) // Your project ID
    .setPlatform(platform); // Your application ID or bundle ID.

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);
const storage = new Storage(client);
export { client, avatars, databases, storage };
export const createUser = async (fullname: string, email: string, password: string, dateOfbirth: string, yearOfstudy: number, programme: string, school: string) => {
    try {
        const newAccount = await account.create(
            ID.unique(),
            email,
            password,
            fullname,
        );

        if (!newAccount) throw new Error('Account creation failed');

        const avatarUrl = avatars.getInitials(fullname);

        await SignIn(email, password);

        const newUser = await databases.createDocument(
            databaseId,
            usersCollectionId,
            ID.unique(),
            {
                userId: newAccount.$id,
                email,
                fullname,
                dateOfbirth,
                yearOfstudy,
                programme,
                avatar: avatarUrl,
                school
            }
        );

        return newUser;
    } catch (error) {
        // Suppress specific errors or handle them differently
        if (!error.message.includes('User (role: guests) missing scope (account)')) {
            console.error(error);
        }
        throw new Error(error.message);
    }
};

// Function to sign in a user
export async function SignIn(email: string, password: string) {
    try {
        const session = await account.createEmailPasswordSession(email, password);
        return session;
    } catch (error) {
        if (!error.message.includes('User (role: guests) missing scope (account)')) {
            console.error(error);
        }
        throw new Error(error.message);
    }
}

// Function to get the current user
export const getCurrentUser = async () => {
    try {
        const currentAccount = await account.get();

        if (!currentAccount) throw new Error('No current account found');

        const currentUser = await databases.listDocuments(
            databaseId,
            usersCollectionId,
            [Query.equal('userId', currentAccount.$id)]
        );
        if (!currentUser) throw new Error('No user found');

        return currentUser.documents[0];
    } catch (error) {
        if (!error.message.includes('User (role: guests) missing scope (account)')) {
            console.error(error);
        }
    }
}

export const signOut = async () => {
    try {
        const session = await account.deleteSession('current');
        return session;
    } catch (error) {
        if (!error.message.includes('User (role: guests) missing scope (account)')) {
            console.error(error);
        }
        throw new Error(error.message);
    }
}

// New function to delete the current session
export const deleteCurrentSession = async () => {
    try {
        await account.deleteSession('current');
        console.log('Current session deleted.');
    } catch (error) {
        if (!error.message.includes('User (role: guests) missing scope (account)')) {
            console.error(error);
        }
    }
};

// Function to get all events
export const getAllEvents = async () => {
    try {
        const theevents = await databases.listDocuments(
            databaseId,
            eventsCollectionId
        );
        return theevents.documents;
    } catch (error) {
        if (!error.message.includes('User (role: guests) missing scope (account)')) {
            console.error(error);
        }
        throw new Error(error.message);
    }
};

// Function to get event by ID
export const getEventById = async (id: string) => {
    try {
        const event = await databases.getDocument(databaseId, eventsCollectionId, id);
        return event;
    } catch (error) {
        if (!error.message.includes('User (role: guests) missing scope (account)')) {
            console.error(error);
        }
        throw new Error(error.message);
    }
};

// Function to get file preview
export const getFilePreview = async (fileId: string, type: string) => {
    let fileUrl;

    try {
        if (type === 'image') {
            fileUrl = storage.getFilePreview(
                storageId, fileId,
                2000, 2000, 'top', 100
            );
        } else {
            throw new Error('Invalid File Type');
        }

        if (!fileUrl) throw new Error('File URL not found');

        return fileUrl;
    } catch (error) {
        if (!error.message.includes('User (role: guests) missing scope (account)')) {
            console.error(error);
        }
        throw new Error(error.message);
    }
};

// Function to upload a file
export const uploadFile = async (file: any, type: string) => {
    if (!file) return;

    const asset = {
        name: file.fileName,
        type: file.mimeType,
        size: file.fileSize,
        uri: file.uri,
    };

    try {
        const uploadedFile = await storage.createFile(
            storageId,
            ID.unique(),
            asset
        );

        const fileUrl = await getFilePreview(uploadedFile.$id, type);

        return fileUrl;
    } catch (error) {
        if (!error.message.includes('User (role: guests) missing scope (account)')) {
            console.error(error);
        }
        throw new Error(error.message);
    }
};

// Function to create an event
export const createEvent = async (form: any) => {
    try {
        const [flyerUrl] = await Promise.all([
            uploadFile(form.flyer, 'image')
        ]);
        const newEvent = await databases.createDocument(
            databaseId, eventsCollectionId, ID.unique(), {
                eventname: form.eventname,
                school: form.school,
                location: form.location,
                flyer: flyerUrl,
                about: form.about,
                datetime: form.datetime.toISOString(),
                organizer: form.organizer,
                links: form.links,
                organizerContact: form.organizerContact,
            }
        );
        return newEvent;
    } catch (error) {
        if (!error.message.includes('User (role: guests) missing scope (account)')) {
            console.error(error);
        }
        throw new Error(error.message);
    }
};

// Function to get all users
export const getAllUsers = async () => {
    try {
        const users = await databases.listDocuments(
            databaseId,
            usersCollectionId
        );
        return users.documents;
    } catch (error) {
        if (!error.message.includes('User (role: guests) missing scope (account)')) {
            console.error(error);
        }
        throw new Error(error.message);
    }
};

// Function to send a friend request
export const sendFriendRequest = async (fromUserId: string, toUserId: string) => {
    try {
        const newFriendRequest = await databases.createDocument(
            databaseId,
            friend_requestsCollectionId,
            ID.unique(),
            {
                fromUserId,
                toUserId,
                status: 'pending',
                createdAt: new Date().toISOString(),
            }
        );

        return newFriendRequest;
    } catch (error) {
        if (!error.message.includes('User (role: guests) missing scope (account)')) {
            console.error(error);
        }
        throw new Error(error.message);
    }
};

// Function to get received friend requests
export const getReceivedFriendRequests = async (userId: string) => {
    try {
        const friendRequests = await databases.listDocuments(
            databaseId,
            friend_requestsCollectionId,
            [Query.equal('toUserId', userId), Query.equal('status', 'pending')]
        );
        return friendRequests.documents;
    } catch (error) {
        if (!error.message.includes('User (role: guests) missing scope (account)')) {
            console.error(error);
        }
        throw new Error(error.message);
    }
};

// Function to accept a friend request
export const acceptFriendRequest = async (requestId: string, fromUserId: string, toUserId: string) => {
    try {
        // Update the friend request status to accepted
        await databases.updateDocument(
            databaseId,
            friend_requestsCollectionId,
            requestId,
            { status: 'accepted' }
        );

        // Create a new entry in the friends collection
        await databases.createDocument(
            databaseId,
            friendsCollectionId,
            ID.unique(),
            {
                userId1: fromUserId,
                userId2: toUserId,
                createdAt: new Date().toISOString(),
            }
        );

        return true;
    } catch (error) {
        if (!error.message.includes('User (role: guests) missing scope (account)')) {
            console.error(error);
        }
        throw new Error(error.message);
    }
};

// Function to reject a friend request
export const rejectFriendRequest = async (requestId: string) => {
    try {
        // Update the friend request status to rejected
        await databases.updateDocument(
            databaseId,
            friend_requestsCollectionId,
            requestId,
            { status: 'rejected' }
        );

        return true;
    } catch (error) {
        if (!error.message.includes('User (role: guests) missing scope (account)')) {
            console.error(error);
        }
        throw new Error(error.message);
    }
};

// Function to get a user by their ID
export const getUserById = async (userId: string) => {
    try {
        const user = await databases.getDocument(databaseId, usersCollectionId, userId);
        return user;
    } catch (error) {
        if (!error.message.includes('User (role: guests) missing scope (account)')) {
            console.error(error);
        }
        throw new Error(error.message);
    }
};

// Function to get the friends of the current user
export const getFriends = async (userId: string) => {
    try {
      // Fetch all documents where userId matches either userId1 or userId2
      const friends1 = await databases.listDocuments(
        databaseId,
        friendsCollectionId,
        [Query.equal('userId1', userId)]
      );
  
      const friends2 = await databases.listDocuments(
        databaseId,
        friendsCollectionId,
        [Query.equal('userId2', userId)]
      );
  
      // Combine the results
      const friendsDocuments = [...friends1.documents, ...friends2.documents];
  
      // Extract friend IDs
      const friendIds = friendsDocuments.map(doc => {
        return doc.userId1 === userId ? doc.userId2 : doc.userId1;
      });
  
      // Fetch details of each friend using their IDs
      const friendDetailsPromises = friendIds.map(friendId =>
        databases.getDocument(databaseId, usersCollectionId, friendId)
      );
  
      const friendsDetails = await Promise.all(friendDetailsPromises);
  
      return friendsDetails;
    } catch (error) {
      if (!error.message.includes('User (role: guests) missing scope (account)')) {
        console.error(error);
      }
      throw new Error(error.message);
    }
  };
  // Function to get friend requests involving the current user
export const getUserFriendRequests = async (userId: string) => {
    try {
        const sentRequests = await databases.listDocuments(
            databaseId,
            friend_requestsCollectionId,
            [Query.equal('fromUserId', userId)]
        );

        const receivedRequests = await databases.listDocuments(
            databaseId,
            friend_requestsCollectionId,
            [Query.equal('toUserId', userId)]
        );

        return {
            sentRequests: sentRequests.documents,
            receivedRequests: receivedRequests.documents,
        };
    } catch (error) {
        if (!error.message.includes('User (role: guests) missing scope (account)')) {
            console.error(error);
        }
        throw new Error(error.message);
    }
}


// api.ts



export const getFriendData = async (userId: string) => {
  try {
    const response = await databases.getDocument(databaseId, usersCollectionId, userId);
    return response;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const updateUserProfile = async (userId: string, updates: Partial<{ 
    fullname: string;
    dateOfbirth: string;
    yearOfstudy: number;
    programme: string;
    school: string;
    avatar: string;
}>) => {
    try {
        // Update the user document with the provided changes
        const updatedUser = await databases.updateDocument(
            databaseId,
            usersCollectionId,
            userId,
            updates
        );

        return updatedUser;
    } catch (error) {
        console.error('Error updating user profile:', error);
        throw new Error(error.message);
    }
};
// Function to send a message
export const sendMessage = async (fromUserId: string, toUserId: string, content: string, messageType: string) => {
    try {
        const newMessage = await databases.createDocument(
            databaseId,
            messagesCollectionId,
            ID.unique(),
            {
                fromUserId,
                toUserId,
                timestamp: new Date().toISOString(),
                isRead: false,
                messageType,
                content,
            }
        );

        return newMessage;
    } catch (error) {
        console.error('Error sending message:', error);
        throw new Error(error.message);
    }
};

// Function to fetch messages between two users
export const getMessages = async (userId1: string, userId2: string) => {
    try {
        const messages = await databases.listDocuments(
            databaseId,
            messagesCollectionId,
            [
                Query.or([
                    Query.and([
                        Query.equal('fromUserId', userId1), 
                        Query.equal('toUserId', userId2)
                    ]),
                    Query.and([
                        Query.equal('fromUserId', userId2), 
                        Query.equal('toUserId', userId1)
                    ])
                ]),
                Query.orderAsc('timestamp')
            ]
        );
        return messages.documents;
    } catch (error) {
        console.error('Error fetching messages:', error);
        throw new Error(error.message);
    }
};

export const markMessageAsRead = async (messageId: string) => {
    try {
        const updatedMessage = await databases.updateDocument(
            databaseId,
            messagesCollectionId,
            messageId,
            {
                isRead: true,
                readTimestamp: new Date().toISOString()
            }
        );
        return updatedMessage;
    } catch (error) {
        console.error('Error marking message as read:', error);
        throw new Error(error.message);
    }
};