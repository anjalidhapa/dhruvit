import User from "./user.model.js";
import bcrypt from "bcrypt"
import { log } from "console"

const login = async (req, res) => {
    try {
        const { email, password } = req.body
        // console.log("email, password", email, password)
        const user = await User.findOne({ email })
        console.log(user)

        if (!user) {
            return res.status(404).json({ success: false, msg: "user not found " })
        }

        // log(user.password)

        const isMatched = await bcrypt.compare(password, user.password)
        console.log(isMatched)

        if (!isMatched) {
            return res.status(401).json({ success: false, msg: "email or password not correct " })
        }
        res.status(200).json({ success: true, msg: "login successfully " })

    } catch (error) {
        res.status(500).json({
            success: false,
            error: "Login faild"
        });
    }
}

export { login }
