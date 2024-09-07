import { databases } from "../../config/AppWrite";

export async function FetchWebinars() {
    try {
        const response = await databases.listDocuments(
            "65ec182e15ec8ffdec9d", "65ec18ca5a5ac7f2ab45"
        );

        if (!response) throw new Error("Failed to fetch the documents");
        return response
    } catch (error) {
        if (error instanceof Error) throw new Error(error.message);
        else throw new Error("Unknown Error");
    }
}