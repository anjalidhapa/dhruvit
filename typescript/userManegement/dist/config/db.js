import mongoose from "mongoose";
async function connectDB() {
    try {
        await mongoose.connect("mongodb+srv://cosmosbvn_db_user:tCpNW1HhMeMWcTlO@tsdemo.jldgcx5.mongodb.net/?appName=tsDemo");
        console.log("Connected to MongoDB successfully!");
    }
    catch (error) {
        if (error instanceof Error) {
            console.error("Error connecting to MongoDB:", error.message);
        }
        process.exit(1); // Exit process with failure
    }
}
export default connectDB;
