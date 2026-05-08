import express from "express";

import { createHackathon, listAllHackathons, getHackathonById, updateHackathon, deleteHackathon } from "../controller/hackathon.controller.js";
import hackathonMiddleware from "../middleware/hackathon.middleware.js";
import authMiddleware from "../middleware/auth.middleware.js";

const HackathonRouter = express.Router();

HackathonRouter.post("/", authMiddleware, hackathonMiddleware, createHackathon);

HackathonRouter.get("/", listAllHackathons);
HackathonRouter.get("/:id", getHackathonById);
HackathonRouter.put("/:id", updateHackathon);
HackathonRouter.delete("/:id", deleteHackathon);

export default HackathonRouter;