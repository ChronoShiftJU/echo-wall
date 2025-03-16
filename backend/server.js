import express from "express";
import dotenv from "dotenv";
import path from "path";

import { connectDB } from "./config/db.js";

import authRoutes from "./routes/auth.route.js";
import feedRoutes from "./routes/feed.route.js";
import profileRoutes from "./routes/profile.route.js";
// import legalRoutes from "./routes/legal.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

app.use(express.json()); // allows us to accept JSON data in the req.body

// Mount routes
app.use("/api/auth", authRoutes);
app.use("/api/feed", feedRoutes);
app.use("/api/profile", profileRoutes);
// app.use("/api/legal", legalRoutes);

if (process.env.NODE_ENV.trim() === "production") {
    app.use(express.static(path.join(__dirname, "/frontend/dist")));
	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
	});
}

app.listen(PORT, () => {
	connectDB();
	console.log("Server started at http://localhost:" + PORT);
});