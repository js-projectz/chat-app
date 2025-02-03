import express from "express";
import cors from 'cors';
import dotenv from 'dotenv';
import connectToDatabase from "./config/db";
import userRoutes from "./routes/userRoutes";
// import conversationRoutes from "./routes/conversationRoutes";
// import messageRoutes from "./routes/messageRoutes";

dotenv.config();


const app = express();

const PORT = process.env.PORT || 5000;


// Middleware
app.use(express.json());
app.use(cors());

// Db connection
connectToDatabase();

// now define the routes
app.use('/api/user', userRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});