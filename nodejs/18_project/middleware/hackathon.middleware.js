import jwt, { decode } from "jsonwebtoken";
import User from "../models/user.model.js";

const hackathonMiddleware = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({
                success: false,
                msg: "No token provided"
            });
        }

        const token = authHeader.split(" ")[1];
        const decoded = await jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findOne({ email: decoded.userEmail });

        if (decoded.userRole === "user") {
            return res.status(403).json({
                success: false,
                message: "you are not authorized to create an event / hackathon"
            })
        }

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

export default hackathonMiddleware; 