import mongoose from "mongoose";
import type { IUser } from "../types/usertype.js";

const userSchema = new mongoose.Schema<IUser>({
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
