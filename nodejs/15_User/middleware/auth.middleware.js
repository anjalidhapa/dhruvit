import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const authMiddleware = async (req, res, next) => {
    try {
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

        // 5. Attach full user
        req.user = user;
        next();
    } catch (error) {
        console.log("AUTH ERROR:", error.message);
        return res.status(401).json({
            success: false,
            msg: "Invalid or expired token"
        });
    }
};

export default authMiddleware;