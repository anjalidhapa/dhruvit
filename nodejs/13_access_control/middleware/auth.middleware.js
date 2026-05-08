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

        // 4.5 check if user is admin or seller
        if (decoded.userRole == "user") {
            return res.status(403).json({
                success: false,
                msg: "Access denied. Admins and sellers only."
            });
        }
        // if (user.role !== "admin" && user.role !== "seller") {
        //     return res.status(403).json({
        //         success: false,
        //         msg: "Access denied. Only Admin and Seller can add products."
        //     });
        // }

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

// Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRW1haWwiOiJjb3Ntb3NAZ21haWwuY29tIiwiaWF0IjoxNzc2MDg4Njc0fQ.8UU-Jx_UNtql7KzdOfzxsqu3fGM9pVZ1v5RQFwDqldQ
// Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRW1haWwiOiJjb3Ntb3NAZ21haWwuY29tIiwiaWF0IjoxNzc2MTcyMjI0fQ.ZLxn8pvg1r4FGyo4YTnfGXBx4VwYtMyRuQwQ6MMQE6I

// admin -> Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJ1c2VyUm9sZSI6ImFkbWluIiwiaWF0IjoxNzc2MTcyODIwfQ.UXrB7qWHwpylyuX_ZGJrSCebhf160bmnIuNpo2KH2C4
// user ->  Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRW1haWwiOiJ1c2VyQGdtYWlsLmNvbSIsInVzZXJSb2xlIjoidXNlciIsImlhdCI6MTc3NjE3MzA3NX0.ttZHSoYlZgVzu28pPU53lHiuKPnNilva_BpsyK_kz3A
// seller ->  Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRW1haWwiOiJzZWxsZXJAZ21haWwuY29tIiwidXNlclJvbGUiOiJzZWxsZXIiLCJpYXQiOjE3NzYxNzMxNzd9.io5K-wmSZaYkXWdGIWmdB7Seup4ZquxXl0n6B52LkkY

