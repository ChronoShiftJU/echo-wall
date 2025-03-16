// routes/feed.route.js
import express from "express";
import { getFeed, postFeed } from "../controllers/feed.controller.js";

const router = express.Router();

router.get("/", getFeed);
router.post("/", postFeed);

export default router;
