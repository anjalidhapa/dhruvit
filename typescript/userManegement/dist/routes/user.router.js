import express from "express";
import { createUser, getallUsers, getuserById, updateUser, deleteUser } from "../controller/user.controller.js";
const UserRouter = express.Router();
UserRouter.post("/", createUser);
UserRouter.get("/", getallUsers);
UserRouter.get(":id", getuserById);
UserRouter.put(":id", updateUser);
UserRouter.delete(":id", deleteUser);
export default UserRouter;
