import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/user.model.js"; 

const SECRET_KEY = process.env.JWT_SECRET || "your_secret_key";

export const signup = async (req, res) => {
    try {
        const { fullName, email, password } = req.body;

        // Check if email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "Email already exists",
            });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Save user
        const user = new User({ fullName, email, password:hashedPassword });
        await user.save();

        res.status(201).json({
            success: true,
            message: "User signed up successfully",
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};


export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find user
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ success: false, message: "No account with the given email" });
        }

        // Compare password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ success: false, message: "Invalid password" });
        }

        // Generate JWT token
        const token = jwt.sign({ userId: user._id }, SECRET_KEY, { expiresIn: "1h" });

        res.status(200).json({ success: true, message: "Login successful", token });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

export const logout = (req, res) => {
    // Logout logic (can be handled via client-side token removal)
    res.status(200).json({ success: true, message: "User logged out successfully" });
};