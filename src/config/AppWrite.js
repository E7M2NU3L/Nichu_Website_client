import { Client, Account, Databases, Avatars} from 'appwrite';
import { configURL } from './configURL';

export const client = new Client();

client
    .setEndpoint(configURL.appwrite_connection_url)
    .setProject(configURL.appwrite_connection_id); // Replace with your project ID

export const account = new Account(client);
export const databases = new Databases(client);
export const avatars = new Avatars(client);