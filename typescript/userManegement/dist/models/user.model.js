import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    age: Number,
    marks: [Number],
    grade: {
        type: String,
        enum: ["A", "B", "C", "D", "F", "E"],
    },
    dob: Date,
    pass: Boolean,
});
const User = mongoose.model("User", userSchema);
export default User;
