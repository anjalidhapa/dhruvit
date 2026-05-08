import User from "../models/user.model.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const login = async (req, res) => {
    try {
        const { email, password } = req.body
        // console.log("email, password", email, password)
        const user = await User.findOne({ email })
        console.log(user)

        if (!user) {
            return res.status(404).json({ success: false, msg: "user not found " })
        }
        const isMatched = await bcrypt.compare(password, user.password)
        console.log(isMatched)

        if (!isMatched) {
            return res.status(401).json({ success: false, msg: "email or password not correct " })
        }

        const token = jwt.sign({ userEmail: user.email }, process.env.JWT_SECRET);

        res.status(200).json({ success: true, msg: "login successfully ", token })
    } catch (error) {
        res.status(500).json({
            success: false,
            error: "Login faild"
        });
    }
}

export { login }


// Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRW1haWwiOiJ1c2VyMUBnbWFpbC5jb20iLCJpYXQiOjE3NzY1MTY0NzB9.p916ZxR7cN26t-qyJYBZO234psF8e2iQy44xf7AN60o