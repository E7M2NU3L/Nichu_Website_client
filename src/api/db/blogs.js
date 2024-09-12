import { databases } from "../../config/AppWrite";

export const FetchEvent = async () => {
    try {
        const promise = await databases.listDocuments(
            "65ec182e15ec8ffdec9d", "664881b900085cca30ad"
        )

        if (!promise) return false;
        return promise;
    } catch (error) {
        return false;
    }
};

export const FetchSingleEvent = async (eventId) => {
    try {
        const promise = await databases.getDocument(
            "65ec182e15ec8ffdec9d", "664881b900085cca30ad", eventId
        )

        if (!promise) return false;
        return promise;
    } catch (error) {
        return false;
    }
};