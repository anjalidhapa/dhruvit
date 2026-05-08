import { ObjectId } from "mongodb";
import { connectToDatabase } from "../config/db.js";

// CREATE USER
const createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // validation
        if (!name || !email || !password) {
            return res.status(400).json({ message: "All fields required" });
        }

        const db = await connectToDatabase();
        const usersCollection = db.collection("users");

        // check duplicate email
        const existingUser = await usersCollection.findOne({ email });
        if (existingUser) {
            console.log("existingUser", existingUser)
            return res.status(400).json({ message: "Email already exists" });
        }

        // insert user
        const result = await usersCollection.insertOne({
            name,
            email,
            password
        });

        res.status(201).json({
            message: "User created successfully",
            userId: result.insertedId
        });

    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).send("Error creating user");
    }
};

// GET ALL USERS
const getUser = async (req, res) => {
    try {
        const db = await connectToDatabase();
        const usersCollection = db.collection("users");

        const users = await usersCollection.find().toArray();

        res.status(200).json(users);

    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).send("Error fetching users");
    }
};

// GET USER BY ID
const getUserWithId = async (req, res) => {
    try {
        const { id } = req.params;

        const db = await connectToDatabase();
        const usersCollection = db.collection("users");

        const user = await usersCollection.findOne({ _id: new ObjectId(id) });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json(user);

    } catch (error) {
        console.error("Error fetching user:", error);
        res.status(500).send("Error fetching user");
    }
};

// UPDATE USER
const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email, password } = req.body;

        const db = await connectToDatabase();
        const usersCollection = db.collection("users");

        const result = await usersCollection.updateOne(
            { _id: new ObjectId(id) },
            { $set: { name, email, password } }
        );

        if (result.matchedCount === 0) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ message: "User updated successfully" });

    } catch (error) {
        console.error("Error updating user:", error);
        res.status(500).send("Error updating user");
    }
};

// DELETE USER
const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;

        const db = await connectToDatabase();
        const usersCollection = db.collection("users");

        const result = await usersCollection.deleteOne({
            _id: new ObjectId(id)
        });

        if (result.deletedCount === 0) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ message: "User deleted successfully" });

    } catch (error) {
        console.error("Error deleting user:", error);
        res.status(500).send("Error deleting user");
    }
};

export { createUser, getUser, getUserWithId, updateUser, deleteUser };