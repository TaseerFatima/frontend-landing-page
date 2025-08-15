import express from "express";
import axios from "axios";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
console.log("CLIENT_ID:", process.env.GITHUB_CLIENT_ID);
console.log("CLIENT_SECRET:", process.env.GITHUB_CLIENT_SECRET);

const app = express();
app.use(cors());

// Step 1 — Redirect to GitHub OAuth
app.get("/auth/github", (req, res) => {
  const redirect_uri = `${process.env.BASE_URL}/auth/github/callback`;
  res.redirect(
    `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}&redirect_uri=${redirect_uri}&scope=user`
  );
});

// Step 2 — GitHub redirects back with "code"
app.get("/auth/github/callback", async (req, res) => {
  const code = req.query.code;
  if (!code) return res.status(400).json({ error: "No code provided" });

  try {
    // Exchange "code" for access token
    const tokenResponse = await axios.post(
      "https://github.com/login/oauth/access_token",
      {
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code,
      },
      { headers: { Accept: "application/json" } }
    );

    const accessToken = tokenResponse.data.access_token;

    // Fetch user data from GitHub
    const userResponse = await axios.get("https://api.github.com/user", {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    const userData = userResponse.data;

    // Send user data to frontend
    res.redirect(
      `${process.env.FRONTEND_URL}?user=${encodeURIComponent(
        JSON.stringify(userData)
      )}`
    );
  } catch (error) {
    console.error("GitHub OAuth error:", error.response?.data || error.message);
    res.status(500).json({ error: "OAuth failed" });
  }
});

app.listen(5000, () => {
  console.log(`✅ Server running on ${process.env.BASE_URL}`);
});
