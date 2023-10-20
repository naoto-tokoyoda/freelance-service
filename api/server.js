import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import conversationRoute from "./routes/conversation.route.js";
import gigRoute from "./routes/gig.route.js";
import messageRoute from "./routes/message.route.js";
import orderRoute from "./routes/order.route.js";
import reviewRoute from "./routes/review.route.js";
import userRoute from "./routes/user.route.js";

// Initialize dotenv and express app
dotenv.config();
const app = express();

// Mongoose configuration
mongoose.set('strictQuery', true);

// MongoDB connection function
const connectToMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to mongoDB!");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};

// API routes
app.use("/api/conversations", conversationRoute);
app.use("/api/gigs", gigRoute);
app.use("/api/orders", orderRoute);
app.use("/api/messages", messageRoute);
app.use("/api/reviews", reviewRoute);
app.use("/api/users", userRoute);

// Start the Express server
const PORT = 8800;
const startServer = () => {
    app.listen(PORT, () => {
        console.log(`Backend server is running on port ${PORT}`);
    });
    connectToMongoDB();
};

// Execute server start
startServer();
