// import express from "express"

// const UserRouter = express.Router()


import { Router } from "express";
import { createUser, deleteUser, getUser, getUserWithId, updateUser } from "../controller/user.controller.js";
// import { checkUser, checkUser2, checkUser3 } from "../middleware/check.middleware.js";
const UserRouter = Router();

UserRouter.get("/", getUser)
UserRouter.get("/:id", getUserWithId)

UserRouter.post('/', createUser)

UserRouter.put("/:id", updateUser)
UserRouter.delete("/:id", deleteUser)

export default UserRouter;