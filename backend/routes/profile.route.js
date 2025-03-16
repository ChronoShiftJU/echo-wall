// routes/profile.route.js
import express from "express";
import { getProfile, updateProfile } from "../controllers/profile.controller.js";

const router = express.Router();

router.get("/:userId", getProfile);
router.put("/:userId", updateProfile);

export default router;
