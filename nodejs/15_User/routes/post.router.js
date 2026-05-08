import express from "express";
import { createPost, deletePost, getPostById, listAllPosts, updatePost } from "../controllers/post.controller.js";
import multer from "multer";
import authMiddleware from "../middleware/auth.middleware.js";

const PostRouter = express.Router();


// Configure Multer (Memory Storage)
const storage = multer.memoryStorage();
const upload = multer({ storage });

PostRouter.post("/", authMiddleware, upload.single('image'), createPost);

PostRouter.get("/", listAllPosts);
PostRouter.get("/:id", getPostById);

PostRouter.put("/:id", authMiddleware, updatePost);
PostRouter.delete("/:id", authMiddleware, deletePost);

export default PostRouter;