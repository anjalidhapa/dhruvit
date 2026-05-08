import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "User name is required"],
            trim: true,
            maxlength: [100, "Name cannot exceed 100 characters"],
        },

        email: {
            type: String,
            required: [true, "Email is required"],
            unique: true,
            lowercase: true,
            trim: true,
            index: true,
            match: [/^\S+@\S+\.\S+$/, "Please use a valid email address"],
        },

        password: {
            type: String,
            required: [true, "Password is required"],
            minlength: [6, "Password must be at least 6 characters"],

        },

        role: {
            type: String,
            enum: ["user", "admin", "organizer", ""],
            default: "user",
        },
        profileImage: {
            type: String,
        },
        bio: {
            type: String,
            trim: true,
            maxlength: [300, "Bio cannot exceed 300 characters"],
            default: "",
        },
        linkedin: { type: String, trim: true },
        github: { type: String, trim: true },
        website: { type: String, trim: true },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

// Prevent model overwrite error
const User =
    mongoose.models.User || mongoose.model("User", UserSchema);

export default User;