import User from "../models/user.model.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const createUser = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;

        if (role == "seller") {
            // check if current user is "admin"
            
            // 1.
            const authHeader = req.headers.authorization;
            // 1. Check token exists
            if (!authHeader || !authHeader.startsWith("Bearer ")) {
                return res.status(401).json({
                    success: false,
                    msg: "No token provided"
                });
            }

            // 2. Extract token
            const token = authHeader.split(" ")[1];

            // 3. Verify token
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            console.log("decoded:", decoded);

            // 4. Check user exists in DB 
            const user = await User.findOne({ email: decoded.userEmail });

            if (!user) {
                return res.status(401).json({
                    success: false,
                    msg: "User not found or deleted"
                });
            }

            // 4.5 check if user is admin or seller
            if (decoded.userRole != "admin") {
                return res.status(403).json({
                    success: false,
                    msg: "Access denied. Only Admins can create seller."
                });
            }
        }

        const saltRounds = 10;

        // 1. Hash password
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // 2. Create user
        const user = new User({
            name,
            email,
            password: hashedPassword,
            role
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