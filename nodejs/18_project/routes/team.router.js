import express from "express"
import { createTeam } from "../controller/team.controller.js";


const TeamRouter = express.Router()

TeamRouter.post("/", createTeam)

export default TeamRouter