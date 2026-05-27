import jwt from "jsonwebtoken"
import Team from "../models/team.model.js";

const createTeam = async (req, res) => {
    try {
        const authHeader = req.headers.authorization;
        const token = authHeader.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log("decoded:", decoded);

        const { name, description } = req.body

        const team = new Team({
            name,
            description,
            leader: decoded.userId
        })
        const savedTeam = await team.save()

        res.status(201).json({
            success: true,
            message: "team created "
        })
    } catch (error) {
        console.error("Full error:", error);

        if (error.code === 11000) {
            return res.status(400).json({
                success: false,
                error: "Team name already exists"
            });
        }

        res.status(500).json({
            success: false,
            error: "Failed to create team"
        });
    }
}

export { createTeam }