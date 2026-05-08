import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { v2 as cloudinary } from "cloudinary"
import connectCloudinary from "../config/cloudinary.js";

const createUser = async (req, res) => {

    try {
        console.log(req.body);
        const { name, email, password, profileImage, role, bio, linkedin, github, website } = req.body;

        const saltRounds = 10;

        const hashedPassword = await bcrypt.hash(password, saltRounds);

        connectCloudinary();

        if (!req.file) {
            return res.status(400).send("No file uploaded.");
        }


        const uploadFromBuffer = (buffer) => {
            return new Promise((resolve, reject) => {
                const stream = cloudinary.uploader.upload_stream(
                    { folder: "ProfileImage" },
                    (error, result) => {
                        if (error) return reject(error);
                        resolve(result);
                    }
                );
                stream.end(buffer);
            });
        };

        // console.log("req.file.buffer", req.file.buffer);
        const result = await uploadFromBuffer(req.file.buffer);
        const profileImageUrl = result.secure_url;

        const user = new User({
            name,
            email,
            password: hashedPassword,
            role,
            profileImage: profileImageUrl,
            bio,
            linkedin,
            github,
            website
        });

        const savedUser = await user.save();

        const userWithoutPassword = await User.findById(savedUser._id).select('-password');

        res.status(201).json({
            success: true,
            msg: "User created successfully",
            user: userWithoutPassword
        });

    } catch (error) {
        console.error("Full error:", error);

        if (error.code === 11000) {
            return res.status(400).json({
                success: false,
                error: "Email already exists"
            });
        }

        res.status(500).json({
            success: false,
            error: "Failed to create user"
        });
    }
};

const listAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json({
            success: true,
            users
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: "Failed to fetch users"
        });
    }
};

const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({
                success: false,
                error: "User not found"
            });
        }

        res.status(200).json({
            success: true,
            user
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: "Failed to fetch user"
        });
    }
};

const updateUser = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!updatedUser) {
            return res.status(404).json({
                success: false,
                error: "User not found"
            });
        }

        res.status(200).json({
            success: true,
            user: updatedUser
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: "Failed to update user"
        });
    }
};

const deleteUser = async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);

        if (!deletedUser) {
            return res.status(404).json({
                success: false,
                error: "User not found"
            });
        }

        res.status(200).json({
            success: true,
            msg: "User deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: "Failed to delete user"
        });
    }
};

export { createUser, listAllUsers, getUserById, updateUser, deleteUser };