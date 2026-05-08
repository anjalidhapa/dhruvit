import express from "express";
import { createUser, listAllUsers, getUserById, updateUser, deleteUser } from "./user.controller.js";
import { login } from "./auth.controller.js";

const UserRouter = express.Router();

UserRouter.post("/", createUser);
UserRouter.post("/login", login)

UserRouter.get("/", listAllUsers);
UserRouter.get("/:id", getUserById);

UserRouter.put("/:id", updateUser);
UserRouter.delete("/:id", deleteUser);



export default UserRouter;