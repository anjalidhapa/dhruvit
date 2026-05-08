import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Title is required"],
            trim: true,
            maxlength: [100, "Title cannot exceed 100 characters"],
        },

        description: {
            type: String,
            required: [true, "Description is required"],
            trim: true,
            maxlength: [500, "Description cannot exceed 500 characters"],
        },
        tags: {
            type: [String],
            default: []
        },
        url: {
            type: String,
            default: ""
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

// Prevent model overwrite (important for Nodemon / Next.js)
const Post =
    mongoose.models.Post || mongoose.model("Post", PostSchema);

export default Post;