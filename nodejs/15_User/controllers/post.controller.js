import connectCoudinary from "../config/coundinary.js";
import Post from "../models/post.model.js";
import { v2 as cloudinary } from "cloudinary"

const createPost = async (req, res) => {
    try {
        const { title, description, tags } = req.body;

        connectCoudinary();

        if (!req.file) {
            return res.status(400).send("No file uploaded.");
        }

        // Convert stream to promise
        const uploadFromBuffer = (buffer) => {
            // console.log(buffer); // 🔥 Check if buffer is valid
            return new Promise((resolve, reject) => {
                const stream = cloudinary.uploader.upload_stream(
                    { folder: "posts" },
                    (error, result) => {
                        if (error) return reject(error);
                        resolve(result);
                    }
                );

                stream.end(buffer); // 🔥 VERY IMPORTANT
            });
        };

        const result = await uploadFromBuffer(req.file.buffer);

        console.log("Cloudinary upload result:", result);

        const tagsArr = tags ? tags.split(",").map(tag => tag.trim()) : [];
        console.log(tagsArr);

        const post = new Post({
            title,
            description,
            tags: tagsArr,
            url: result.secure_url // correct URL
        });

        await post.save();

        res.status(201).json({
            success: true,
            msg: "Post created",
            post
        });

    } catch (error) {
        console.error("Full error:", error);

        if (error.code === 11000) {
            return res.status(400).json({
                success: false,
                error: "Post with this title already exists"
            });
        }

        res.status(500).json({
            success: false,
            error: "Failed to create post"
        });
    }
};

const listAllPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json({
            success: true,
            posts
        });``
    } catch (error) {
        res.status(500).json({
            success: false,
            error: "Failed to fetch posts"
        });
    }
};

const getPostById = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) {
            return res.status(404).json({
                success: false,
                error: "Post not found"
            });
        }

        res.status(200).json({
            success: true,
            post
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: "Failed to fetch post"
        });
    }0
};

const updatePost = async (req, res) => {
    try {
        const updatedPost = await Post.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!updatedPost) {
            return res.status(404).json({
                success: false,
                error: "Post not found"
            });
        }

        res.status(200).json({
            success: true,
            post: updatedPost
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: "Failed to update post"
        });
    }
};

const deletePost = async (req, res) => {
    try {
        const deletedPost = await Post.findByIdAndDelete(req.params.id);

        if (!deletedPost) {
            return res.status(404).json({
                success: false,
                error: "Post not found"
            });
        }

        res.status(200).json({
            success: true,
            msg: "Post deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: "Failed to delete post"
        });
    }
};

export { createPost, listAllPosts, getPostById, updatePost, deletePost };