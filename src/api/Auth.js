import { Client, Account, ID } from "appwrite";
import { configURL } from "../config/configURL";

class Authentication{
    client = new Client().setEndpoint(configURL.appwrite_connection_url).setProject(configURL.appwrite_connection_id);
    account;

    constructor(){
        this.account = new Account(this.client);
    }

    async loginUser([email, password]){
        try {
            // collect the params
            let email = String(email);
            let password = String(password);

            // login the user
            let response = await this.account.createEmailPasswordSession({
                email: email,
                password: password
            })

            return response;            
        } catch (error) {
            console.log(error.message);
        }
        return null;
    }

    async RegisterUser([username, password, email]){
        try {
            // collect the params
            let username = String(username);
            let password = String(password);
            let email = String(email);

            // register the user
            let response = await this.account.create({
                username: username,
                password: password,
                email: email
            })

            // return response and login the user
            this.loginUser([response.email, response.password]);
            return response;
        } catch (error) {
            console.log(error.message);
        }
        return null;
    }

    async createVerification(){
        try {
            const promise = await this.account.createVerification('https://localhost:3000/api/v1/users/account/verify');

            promise.then(function (response) {
                console.log(response);
            }, function (error) {
                console.log(error);
            });

            return response;
        } catch (error) {
            console.log(error.message);
        }
        return null;
    }

    async updateVerification(){
        try {
            // get the verification
            const urlParams = new URLSearchParams(window.location.search);
            const secret = urlParams.get('secret');
            const userId = urlParams.get('userId');

            // returning the promise
            const promise = account.updateVerification(userId, secret);
            return promise;
        } catch (error) {
            console.log(error.message);
        }
    }

    async isLoggedin(){
        try {
            return await this.account.get();
        } catch (error) {
            console.log(error.message);
        }
        return null;
    }

    async ForgotPassword(email){
        try {
            // get the params
            const Email = String(email);
            const redirectURL = "http://localhost:3000/api/v1/account/recover-password";

            // send the request
            const response = await this.account.createRecovery(
                Email,
                redirectURL
            )

            // get the password from the reponse
            // update the password in the users collection
            this.UpdateProfile(response.userId);
        } catch (error) {
            console.log(error.message);
        }
    }

    async UpdatePassword([userID, secret, password]){
        try {
            // get the data
            const userID = String(userID);
            const secret = String(secret);
            const password = String(password);

            // get the promise
            const promise = await this.account.updateRecovery(
                userID,
                secret,
                password
            );

            // return the promise
            return promise;
        } catch (error) {
            console.log(error.message);
        }
        return null;
    }

    async Logout(){
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            console.log(error.message);
        }
        return null;
    }

    async GoogleSignin(){
        try {
            const promise = await this.account.createOAuth2Session(
                "google",
                "https://localhost:3000/api/v1/users/account/google",
                "https://localhost:3000/v1/users/register",
            )
            return promise;
        } catch (error) {
            console.log(error.message);
        }
        return null;
    }

    async FacebookSignin(){
        try {
            const promise = await this.account.createOAuth2Session(
                "facebook",
                "https://localhost:3000/api/v1/users/account/facebook",
                "https://localhost:3000/v1/users/register",
            )
            return promise;
        } catch (error) {
            console.log(error.message);
        }
        return null;
    }

    async GitHubSignin(){
        try {
            const promise = await this.account.createOAuth2Session(
                "github",
                "https://localhost:3000/api/v1/users/account/github",
                "https://localhost:3000/v1/users/register",
            )
            return promise; 
        }
            catch (error) {
            console.log(error.message);
        }
        return null;
    }
}

// export the authentication
const authService = new Authentication();
export default authService;
