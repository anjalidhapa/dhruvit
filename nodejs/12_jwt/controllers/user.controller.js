import User from "../models/user.model.js"
import bcrypt from "bcrypt"

const createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const saltRounds = 10;

        // 1. Hash password
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // 2. Create user
        const user = new User({
            name,
            email,
            password: hashedPassword
        });

        // 3. Save user
        const savedUser = await user.save();

        // 4. Fetch user without password
        const userWithoutPassword = await User.findById(savedUser._id).select('-password');

        // 5. Send response
        res.status(201).json({
            success: true,
            msg: "User created successfully",
            user: userWithoutPassword
        });

    } catch (error) {
        console.error("Full error:", error);

        // Duplicate email error
        if (error.code === 11000) {
            return res.status(400).json({
                success: false,
                error: "Email already exists"
            });
        }

        // General error
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