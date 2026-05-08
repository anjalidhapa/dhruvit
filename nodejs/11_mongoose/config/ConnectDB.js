import mongoose from "mongoose";

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to MongoDB successfully!');
    } catch (error) {
        console.error('Connection error:', error.message);
        process.exit(1); // Exit process with failure
    }
}
export default connectDB
