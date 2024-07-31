import { databases } from "@/lib/appwrite";

const databaseId = '665a23f10004a468ad76';
const usersCollectionId ='665a24180038f8c9a53a';

export const fetchEvents = async () => {
    try {
        const response = await databases.listDocuments(databaseId, usersCollectionId);
        return response.documents;
    } catch (error) {
        console.error('Error fetching documents:', error);
        return [];
    }
};
