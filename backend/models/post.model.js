// not used currently

// models/post.model.js
import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    content: { type: String, required: true },
    author: { type: String, required: true },
    // Optionally add additional fields as needed
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

export default Post;
