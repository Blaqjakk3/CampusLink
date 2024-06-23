// appwrite.ts
import { Platform } from "react-native";
import { Account, Avatars, Client, Databases, ID } from 'react-native-appwrite';

export const config = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.sandcj.campusLink',
    projectId: '665a205000004ae07bb7',
    databaseId: '665a23f10004a468ad76',
    userCollectionId: '665a24180038f8c9a53a',
    friendsColectionId: '665a26cc00069d6fdd57',
    groupsCollectionId: '665a270700032bc8bfc0',
    interestsCollectionId: '665a27300004dc17cb91',
    messagesCollectionId: '665a2752002ec2beb332',
    groupMessagesCollectionId: '665a4d78003b5d932a57',
    storageId: '665a50ab0004d3a61e77',
};

// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(config.endpoint) // Your Appwrite Endpoint
    .setProject(config.projectId) // Your project ID
    .setPlatform(config.platform) // Your application ID or bundle ID.

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

export const createUser = async (fullname:string, email: string, password: string, dateOfbirth, yearOfstudy: number, programme: string, school: string) => {
    try {
        const newAccount = await account.create(
            ID.unique(),
            email,
            password,
            fullname,
        );

        if (!newAccount) throw Error;

        const avatarUrl = avatars.getInitials(fullname);

        await SignIn(email, password);

        const newUser = await databases.createDocument(
            config.databaseId,
            config.userCollectionId,
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
        console.log(error);
        throw new Error(error);
    }
};

export async function SignIn(email: string, password: string) {
    try {
        const session = await account.createEmailPasswordSession(email, password);
        return session;
    } catch (error) {
        throw new Error(error);
    }
}

// New function to delete the current session
export async function deleteCurrentSession() {
    try {
        await account.deleteSession('current');
        console.log('Current session deleted.');
    } catch (error) {
       
    }
}
