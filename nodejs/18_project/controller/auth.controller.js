import User from "../models/user.model.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const login = async (req, res) => {
    try {
        console.log("req body ", req.body);

        const { email, password } = req.body
        console.log("email, password", email, password)
        const user = await User.findOne({ email })

        if (!user) {
            return res.status(404).json({ success: false, msg: "user not found " })
        }

        const isMatched = await bcrypt.compare(password, user.password)

        if (!isMatched) {
            return res.status(401).json({ success: false, msg: "email or password not correct " })
        }

        const token = jwt.sign({ userId: user._id, userEmail: user.email, userRole: user.role }, process.env.JWT_SECRET);
        req.user = user;

        res.status(200).json({ success: true, msg: "login successfully ", token })
    } catch (error) {
        console.log("error login", error.message);

        res.status(500).json({

            success: false,
            error: "Login faild"
        });
    }
}

export { login }


