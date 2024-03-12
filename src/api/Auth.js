import { Client, Account, ID } from "appwrite";
import { configURL } from "../config/configURL";

class Authentication{
    client = new Client().setEndpoint(configURL.appwrite_connection_url).setProject(configURL.appwrite_connection_id);
    account;

    constructor(){
        this.account = new Account(this.client);
    }

    async loginUser(){

    }

    async RegisterUser(){

    }

    async ProfileUpload(){

    }

    async UpdateProfile(){

    }

    async Logout(){

    }

    async ChangePassword(){

    }

    async GoogleSignin(){

    }

    async FacebookSignin(){

    }

    async GitHubSignin(){

    }
}

// export the authentication
const authService = new Authentication();
export default authService;
