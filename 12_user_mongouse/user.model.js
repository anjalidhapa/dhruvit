import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "User name is required"],
        trim: true,
        maxlength: [100, "Name cannot exceed 100 characters"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        lowercase: true,
        trim: true,
        match: [/^\S+@\S+\.\S+$/, "Please use a valid email address"],
        index: true
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [6, "Password must be at least 6 characters"]
    }
}, {
    timestamps: true
});

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;