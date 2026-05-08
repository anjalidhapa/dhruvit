import mongoose from "mongoose";

const connectDB = async () => {
    await mongoose.connect(process.env.MONGO_URI)
        .then(() => {
            console.log("mongodb connected ")
        }).catch((e) => {
            console.log(e.message)
            console.log("error connecting db")
        })
}

export default connectDB



// cosmosbvn_db_user
// ZmAQlQLnP73BUI1R

// mongodb+srv://cosmosbvn_db_user:ZmAQlQLnP73BUI1R@project.at7yomk.mongodb.net/