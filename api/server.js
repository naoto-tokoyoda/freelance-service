import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import userRoute from "./routes/user.routes.js";


// Initialize dotenv
dotenv.config();

// Configure Mongoose
mongoose.set('strictQuery', true);

const app = express();

// MongoDB connection function
const connectToMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to mongoDB!");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};

app.use("/api/users", userRoute);


// Start the Express server
const startServer = () => {
    app.listen(8800, () => {
        console.log("Backend server is running on port 8800");
    });
    connectToMongoDB();
};

// Start the server
startServer();
