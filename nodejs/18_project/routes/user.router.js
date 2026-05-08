import express from "express";
import { createUser, listAllUsers, getUserById, updateUser, deleteUser } from "../controller/user.controller.js"
import { login } from "../controller/auth.controller.js";
import upload from "../middleware/upload.js";


const UserRouter = express.Router();

UserRouter.post("/", upload.single("profileImage"), createUser);
UserRouter.post("/login", login)

UserRouter.get("/", listAllUsers);
UserRouter.get("/:id", getUserById);

UserRouter.put("/:id", updateUser);
UserRouter.delete("/:id", deleteUser);

export default UserRouter;