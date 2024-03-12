import { Account, Client } from "appwrite";
import { configURL } from "../config/configURL";

export class BucketService{
    client = new Client().setEndpoint(configURL.appwrite_connection_url).setProject(configURL.appwrite_connection_id);
    account;

    constructor(){
        this.account = new Account(this.client);
    }

    async GetUser(){

    }

    async GetUsers(){
        
    }
}

const bucketService = new BucketService();
export default bucketService();