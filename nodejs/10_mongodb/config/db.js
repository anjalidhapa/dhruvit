import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

export async function connectToDatabase() {
    try {
        await client.connect();
        console.log("Connected to MongoDB");
        return client.db("demo");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        throw error;
    }
}