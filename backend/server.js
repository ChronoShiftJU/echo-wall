// require("dotenv").config();
// const express = require("express");
// const axios = require("axios");
// const cookieParser = require("cookie-parser");
// // const crypto = require('crypto');


// const app = express();
// app.use(cookieParser());

// const CLIENT_ID = process.env.REDDIT_CLIENT_ID;
// const CLIENT_SECRET = process.env.REDDIT_CLIENT_SECRET;
// const REDIRECT_URI = "http://localhost:3000/auth/reddit/callback";
// const FRONTEND_URL = "http://localhost:5173"; // Change if using React

// // Step 1: Redirect user to Reddit for authorization
// app.get("/auth/reddit", (req, res) => {
//     const state = Math.random().toString(36).substring(2, 10);
//     res.cookie("oauth_state", state, { httpOnly: true });

//     const authUrl = `https://www.reddit.com/api/v1/authorize?` +
//         `client_id=${CLIENT_ID}&` +
//         `response_type=code&` +
//         `state=${state}&` +
//         `redirect_uri=${encodeURIComponent(REDIRECT_URI)}&` +
//         `duration=permanent&` +
//         `scope=identity read mysubreddits`;

//     res.redirect(authUrl);
// });

// // Step 2: Handle Reddit OAuth callback & exchange code for access token
// app.get("/auth/reddit/callback", async (req, res) => {
//     const { code, state } = req.query;
//     if (state !== req.cookies.oauth_state) return res.status(403).send("Invalid state");

//     try {
//         const response = await axios.post(
//             "https://www.reddit.com/api/v1/access_token",
//             new URLSearchParams({
//                 grant_type: "authorization_code",
//                 code: code,
//                 redirect_uri: REDIRECT_URI
//             }),
//             {
//                 auth: { username: CLIENT_ID, password: CLIENT_SECRET },
//                 headers: { "Content-Type": "application/x-www-form-urlencoded" }
//             }
//         );

//         const { access_token, refresh_token } = response.data;
//         res.cookie("reddit_token", access_token, { httpOnly: true });
//         res.cookie("reddit_refresh", refresh_token, { httpOnly: true });

//         res.redirect(FRONTEND_URL + "/dashboard"); // Redirect user after login
//     } catch (error) {
//         console.error("OAuth Error:", error.response ? error.response.data : error.message);
//         res.status(500).send("OAuth authentication failed");
//     }
// });

// // Step 3: Fetch User's Reddit Home Feed
// app.get("/api/reddit/feed", async (req, res) => {
//     const token = req.cookies.reddit_token;
//     if (!token) return res.status(401).send("Unauthorized");

//     try {
//         const response = await axios.get("https://oauth.reddit.com/r/home?limit=10", {
//             headers: {
//                 Authorization: `Bearer ${token}`,
//                 "User-Agent": "YourAppName/1.0"
//             }
//         });
//         res.json(response.data);
//     } catch (error) {
//         console.error("Reddit API Error:", error.response ? error.response.data : error.message);
//         res.status(500).send("Failed to fetch feed");
//     }
// });


// //----------------------------------------------------------------------------------------------------------------------

// const axios = require("axios");

// const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;

// const { google } = require("google-auth-library");

// const YOUTUBE_CLIENT_ID = process.env.YOUTUBE_CLIENT_ID;
// const YOUTUBE_CLIENT_SECRET = process.env.YOUTUBE_CLIENT_SECRET;
// const YOUTUBE_REDIRECT_URI = process.env.YOUTUBE_REDIRECT_URI;

// const oauth2Client = new google.auth.OAuth2(
//     YOUTUBE_CLIENT_ID,
//     YOUTUBE_CLIENT_SECRET,
//     YOUTUBE_REDIRECT_URI
// );
// app.get("/auth/youtube/callback", async (req, res) => {
//     const { code } = req.query;
//     if (!code) return res.status(400).send("Missing authorization code");

//     try {
//         const { tokens } = await oauth2Client.getToken(code);
//         oauth2Client.setCredentials(tokens);

//         // Store the access token in a session, cookie, or DB
//         res.cookie("youtube_token", tokens.access_token, { httpOnly: true });

//         res.redirect("/dashboard"); // Redirect to frontend dashboard
//     } catch (error) {
//         console.error("YouTube OAuth Error:", error.response?.data || error.message);
//         res.status(500).send("OAuth authentication failed");
//     }
// });


// app.get("/auth/youtube", (req, res) => {
//     const authUrl = oauth2Client.generateAuthUrl({
//         access_type: "offline",
//         scope: ["https://www.googleapis.com/auth/youtube.readonly"],
//     });
//     res.redirect(authUrl);
// });

// async function getTrendingVideos() {
//     try {
//         const response = await axios.get(
//             `https://www.googleapis.com/youtube/v3/videos`, {
//                 params: {
//                     part: "snippet",
//                     chart: "mostPopular",
//                     regionCode: "US",
//                     maxResults: 10,
//                     key: YOUTUBE_API_KEY
//                 }
//             }
//         );
//         console.log(response.data.items); // Video list
//     } catch (error) {
//         console.error("YouTube API Error:", error.response?.data || error.message);
//     }
// }

// getTrendingVideos();

// app.get("/api/youtube/trending", async (req, res) => {
//     try {
//         const response = await axios.get(
//             `https://www.googleapis.com/youtube/v3/videos`, {
//                 params: {
//                     part: "snippet",
//                     chart: "mostPopular",
//                     regionCode: "US",
//                     maxResults: 10,
//                     key: YOUTUBE_API_KEY
//                 }
//             }
//         );
//         res.json(response.data.items);
//     } catch (error) {
//         console.error("YouTube API Error:", error.response?.data || error.message);
//         res.status(500).send("Failed to fetch trending videos");
//     }
// });


// app.get("/api/youtube/search", async (req, res) => {
//     const { query } = req.query;
//     if (!query) return res.status(400).send("Missing search query");

//     try {
//         const response = await axios.get(
//             `https://www.googleapis.com/youtube/v3/search`, {
//                 params: {
//                     part: "snippet",
//                     q: query,
//                     maxResults: 10,
//                     key: YOUTUBE_API_KEY
//                 }
//             }
//         );
//         res.json(response.data.items);
//     } catch (error) {
//         console.error("YouTube API Error:", error.response?.data || error.message);
//         res.status(500).send("Failed to search videos");
//     }
// });

// app.get("/api/youtube/subscriptions", async (req, res) => {
//     const token = req.cookies.youtube_token;
//     if (!token) return res.status(401).send("Unauthorized");

//     try {
//         const response = await axios.get("https://www.googleapis.com/youtube/v3/subscriptions", {
//             headers: { Authorization: `Bearer ${token}` },
//             params: {
//                 part: "snippet",
//                 mine: true,
//                 maxResults: 10
//             }
//         });

//         // Extract channel IDs from the response
//         const channels = response.data.items.map(item => item.snippet.resourceId.channelId);

//         res.json(channels);
//     } catch (error) {
//         console.error("YouTube API Error:", error.response?.data || error.message);
//         res.status(500).send("Failed to fetch subscriptions");
//     }
// });


// app.get("/api/youtube/feed", async (req, res) => {
//     const token = req.cookies.youtube_token;
//     if (!token) return res.status(401).send("Unauthorized");

//     try {
//         // Step 1: Get User's Subscribed Channels
//         const subsResponse = await axios.get("https://www.googleapis.com/youtube/v3/subscriptions", {
//             headers: { Authorization: `Bearer ${token}` },
//             params: {
//                 part: "snippet",
//                 mine: true,
//                 maxResults: 10
//             }
//         });

//         const channelIds = subsResponse.data.items.map(item => item.snippet.resourceId.channelId);
//         if (!channelIds.length) return res.json([]);

//         // Step 2: Fetch Latest Videos from Each Channel
//         let allVideos = [];

//         for (const channelId of channelIds) {
//             const videosResponse = await axios.get("https://www.googleapis.com/youtube/v3/search", {
//                 headers: { Authorization: `Bearer ${token}` },
//                 params: {
//                     part: "snippet",
//                     channelId,
//                     order: "date",
//                     maxResults: 3  // Fetch latest 3 videos per channel
//                 }
//             });

//             allVideos.push(...videosResponse.data.items);
//         }

//         // Step 3: Sort Videos by Publish Date
//         allVideos.sort((a, b) => new Date(b.snippet.publishedAt) - new Date(a.snippet.publishedAt));

//         res.json(allVideos);
//     } catch (error) {
//         console.error("YouTube API Error:", error.response?.data || error.message);
//         res.status(500).send("Failed to fetch user feed");
//     }
// });





// // Start server
// app.listen(3000, () => console.log("Server running on http://localhost:3000"));



//testing yt api


require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cookieParser = require("cookie-parser");
const { google } = require("googleapis");

const app = express();
app.use(cookieParser());

const CLIENT_ID = process.env.YOUTUBE_CLIENT_ID;
const CLIENT_SECRET = process.env.YOUTUBE_CLIENT_SECRET;
const REDIRECT_URI = "http://localhost:3000/auth/youtube/callback";
const FRONTEND_URL = "http://localhost:5173";

const oauth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI
);

// Step 1: Redirect user to Google OAuth
app.get("/auth/youtube", (req, res) => {
    const authUrl = oauth2Client.generateAuthUrl({
        access_type: "offline",
        scope: ["https://www.googleapis.com/auth/youtube.readonly"],
        prompt: "consent"
    });
    res.redirect(authUrl);
});

// Step 2: Handle OAuth callback & exchange code for tokens
app.get("/auth/youtube/callback", async (req, res) => {
    const { code } = req.query;
    if (!code) return res.status(400).send("Missing authorization code");

    try {
        const { tokens } = await oauth2Client.getToken(code);
        oauth2Client.setCredentials(tokens);

        res.cookie("youtube_access_token", tokens.access_token, { httpOnly: true });
        res.cookie("youtube_refresh_token", tokens.refresh_token, { httpOnly: true });

        res.redirect(FRONTEND_URL + "/dashboard"); // Redirect to frontend
    } catch (error) {
        console.error("YouTube OAuth Error:", error.response?.data || error.message);
        res.status(500).send("OAuth authentication failed");
    }
});

// Step 3: Fetch User's YouTube Feed (Latest Videos from Subscriptions)
app.get("/api/youtube/feed", async (req, res) => {
    const token = req.cookies.youtube_access_token || req.headers.authorization?.split(" ")[1];

    console.log("🔥 Received Token:", token); // Debugging log

    if (!token) return res.status(401).send("Unauthorized");

    try {
        // Step 1: Fetch User’s Subscribed Channels
        const subsResponse = await axios.get("https://www.googleapis.com/youtube/v3/subscriptions", {
            headers: { Authorization: `Bearer ${token}` },
            params: { part: "snippet", mine: true, maxResults: 10 }
        });

        const channelIds = subsResponse.data.items.map(item => item.snippet.resourceId.channelId);
        if (!channelIds.length) return res.json([]);

        // Step 2: Fetch Latest Videos from Each Channel
        let allVideos = [];
        for (const channelId of channelIds) {
            const videosResponse = await axios.get("https://www.googleapis.com/youtube/v3/search", {
                headers: { Authorization: `Bearer ${token}` },
                params: { part: "snippet", channelId, order: "date", maxResults: 3 }
            });
            allVideos.push(...videosResponse.data.items);
        }

        // Step 3: Sort Videos by Publish Date
        allVideos.sort((a, b) => new Date(b.snippet.publishedAt) - new Date(a.snippet.publishedAt));

        res.json(allVideos);
    } catch (error) {
        console.error("YouTube API Error:", error.response?.data || error.message);
        res.status(500).send("Failed to fetch user feed");
    }
});

// Step 4: Refresh Token Automatically if Expired
async function refreshAccessToken(refreshToken) {
    try {
        const response = await axios.post("https://oauth2.googleapis.com/token", new URLSearchParams({
            client_id: CLIENT_ID,
            client_secret: CLIENT_SECRET,
            refresh_token: refreshToken,
            grant_type: "refresh_token"
        }));
        return response.data.access_token;
    } catch (error) {
        console.error("Token Refresh Error:", error.response?.data || error.message);
        return null;
    }
}

app.get("/api/youtube/refresh", async (req, res) => {
    const refreshToken = req.cookies.youtube_refresh_token;
    if (!refreshToken) return res.status(401).send("No refresh token available");

    const newAccessToken = await refreshAccessToken(refreshToken);
    if (newAccessToken) {
        res.cookie("youtube_access_token", newAccessToken, { httpOnly: true });
        res.send("Access token refreshed");
    } else {
        res.status(500).send("Failed to refresh access token");
    }
});

// Start server
app.listen(3000, () => console.log("Server running on http://localhost:3000"));

