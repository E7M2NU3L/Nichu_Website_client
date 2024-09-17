import { ID, Query } from "appwrite";
import { avatars, databases } from "../../config/AppWrite";

export const CreateUser = async ({username, email, password, userId}) => {
    try {
        const response = await avatars.getInitials(username);
        if (!response) throw new Error("Somthing went wrong");

        const promise = await databases.createDocument(
            "65ec182e15ec8ffdec9d", "65ec184a65550085f404",
            ID.unique(),
            {
                user_email : email,
                password : password,
                username,
                Users_Image : response.toString(),
                User_ID : userId
            }
        );

        if (!promise) throw new Error("Something went wrong");
        
        return promise;
    } catch (error) {
        throw new Error(error.message);
    }
};

export async function GetUser(userId) {
    try {
        const promise = await databases.listDocuments(
            "65ec182e15ec8ffdec9d", "65ec184a65550085f404",
            [
                Query.equal('User_ID', [userId, ]),
            ]
        );

        if (!promise) throw new Error("Something went wrong");
        
        return promise.documents;
    } catch (error) {
        throw new Error(error.message);
    }
}