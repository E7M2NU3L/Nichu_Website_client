import { Client } from "appwrite";
import { configURL } from "../config/configURL";

export class DBService{
    client = new Client().setEndpoint(configURL.appwrite_connection_url).setProject(
        configURL.appwrite_connection_id
    )
    account;

    constructor(){
        this.account = new Account(this.client);
    }

    // functionality
    async GetUser(){

    }

    async GetUsers(){

    }

    async CreateUser(){

    }

    async UpdateUser(){

    }

    async DeleteUser(){

    }

    async GetWebinars(){

    }

    async GetWebinar(){

    }

    async CreateWebinar(){

    }

    async UpdateWebinar(){

    }

    async DeleteWebinar(){

    }

    async RegisterWebinar(){

    }

    async CreateInstructor(){

    }

    async DeleteInstructor(){

    }

    async GetInstructors(){

    }

    async GetInstructor(){

    }

    async UpdateInstructor(){

    }

    async VerifyInstructor(){

    }

    async CreateCourse(){

    }

    async DeleteCourses(){

    }

    async UpdateCourse(){

    }

    async GetCourses(){

    }
}

const db_Service = new DBService();
export default db_Service;