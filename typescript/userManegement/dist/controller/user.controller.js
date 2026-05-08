import User from "../models/user.model.js";
// create user
const createUser = async (req, res) => {
    try {
        const { name, email, password, age, marks, grade, dob, pass } = req.body;
        const user = new User({
            name,
            email,
            password,
            age,
            marks,
            grade,
            dob,
            pass,
        });
        await user.save();
        res
            .status(201)
            .json({ success: true, message: "User created successfully" });
    }
    catch (error) {
        if (error instanceof Error) {
            console.error("Error creating user:", error.message);
        }
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};
const getallUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json({ success: true, data: users });
    }
    catch (error) {
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};
const getuserById = async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await User.findById(userId);
        if (!user) {
            return res
                .status(404)
                .json({ success: false, message: "User not found" });
        }
        res.status(202).json({ succcess: true, data: user });
    }
    catch (error) {
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};
const updateUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const { name, email, password, age, marks, grade, dob, pass } = req.body;
        const updatedUser = await User.findByIdAndUpdate(userId, { name, email, password, age, marks, grade, dob, pass }, { new: true });
        if (!updatedUser) {
            return res
                .status(404)
                .json({ success: false, message: "User Not Found" });
        }
        res.status(200).json({ success: true, data: updatedUser });
    }
    catch (error) {
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};
const deleteUser = async (req, res) => {
    try {
        return res
            .status(200)
            .json({ success: true, message: "User Deleted Succesfull" });
    }
    catch (error) {
        res.status(500).json({ success: false, message: "Internal server Error" });
    }
};
export { createUser, getallUsers, getuserById, updateUser, deleteUser };
