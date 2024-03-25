import { Account, Client, Storage } from "appwrite";
import { configURL } from "../config/configURL";

export class BucketService{
    client = new Client().setEndpoint(configURL.appwrite_connection_url).setProject(configURL.appwrite_connection_id);
    account;
    storage;

    constructor(){
        this.account = new Account(this.client);
        this.storage = new Storage(this.client);
    }

    async UploadImage(){
        try {
            // promise
            const promise = storage.createFile(
                '[BUCKET_ID]',
                ID.unique(),
                document.getElementById('uploader').files[0]
            );
        } catch (error) {
            console.log(error.message);
        }
    }

    async UploadCourseVideo(){

    }

    async UploadUserImage(){
        
    }
}



const bucketService = new BucketService();
export default bucketService();