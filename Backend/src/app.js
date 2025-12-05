import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const app = express();

// CORS configuration
const corsOptions = {
    origin: "http://localhost:5173", // Frontend origin
    methods: "GET, POST, PATCH, PUT, DELETE, HEAD",
    credentials: true, // Allow cookies
};

app.use(cors(corsOptions));

// Middleware for parsing JSON (limit added to prevent abuse)
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

// Serve static files from the "public" directory
app.use(express.static("public"));

// Parse cookies
app.use(cookieParser());

import userRouter from "./routers/user.routers.js";
app.use("/api/v1/users", userRouter);
export { app };