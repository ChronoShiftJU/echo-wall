// not used currently

// models/user.model.js
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true } // Note: In production, passwords should be hashed.
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
