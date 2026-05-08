import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const authMiddleware = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;

        
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({
                success: false,
                msg: "No token provided"
            });
        }

        
        const token = authHeader.split(" ")[1];

        
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log("decoded:", decoded);

                
        const user = await User.findOne({ email: decoded.userEmail });

        if (!user) {
            return res.status(401).json({
                success: false,
                msg: "User not found or deleted"
            });
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

export default authMiddleware; 