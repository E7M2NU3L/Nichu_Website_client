import { Client } from "appwrite";
import { configURL } from "../config/configURL";

class DBService{
    client = new Client().setEndpoint(configURL.appwrite_connection_url).setProject(
        configURL.appwrite_connection_id
    )
    account;

    constructor(){
        this.account = new Account(this.client);
    }

    // functionality
    async UploadImage(){

    }

    async UploadCourseVideo(){

    }

    async UploadUserImage(){
        
    }
}