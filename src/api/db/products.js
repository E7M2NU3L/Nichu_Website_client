import { Query } from "appwrite";
import { databases } from "../../config/AppWrite";

export async function FetchRoboticsProducts() {
    try {
        const response = await databases.listDocuments(
            "65ec182e15ec8ffdec9d",
            "66c1fc6500100dcd42e2",
            [
                Query.equal('category', 'robotics')
            ]
        )

        if (!response) throw Error
        console.log(response.documents);
        return response.documents;
    } catch (error) {
        console.log(error);
        return false;
    }
}

export async function FetchArduinoProducts() {
    try {
        const response = await databases.listDocuments(
            "65ec182e15ec8ffdec9d",
            "66c1fc6500100dcd42e2",
            [
                Query.equal('category', 'arduino')
            ]
        )

        if (!response) throw Error

        console.log(response.documents);
        return response.documents;
    } catch (error) {
        console.log(error);
        return false;
    }
}

export async function FetchElectronicsProducts() {
    try {
        const response = await databases.listDocuments(
            "65ec182e15ec8ffdec9d",
            "66c1fc6500100dcd42e2",
            [
                Query.equal('category', 'electronics')
            ]
        )

        console.log(response.documents);
        if (!response) throw Error

        return response.documents;
    } catch (error) {
        console.log(error);
        return false;
    }
}

export async function FetchSingleProduct({slug}) {
    try {
        const response = await databases.getDocument(
            "65ec182e15ec8ffdec9d",
            "66c1fc6500100dcd42e2",
            slug
        )

        if (!response) throw Error

        return response;
    } catch (error) {
        console.log(error);
        return false;
    }
}