// url where i deployed this app on vercel --> https://auth-express-mongodb-boilerplate-ctdl023tf.vercel.app/

import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/config.js";
import authRoutes from "./routes/authRoutes.js";
import cors from 'cors'

const app = express();

dotenv.config();
connectDB();

app.use(express.json());
app.use((req, res, next) => {
    
    res.setHeader('Access-Control-Allow-Origin', '*');

    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    next();
    
});
app.use(cors({origin:"*"}))

app.use("/auth", authRoutes);

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(5000, () => {
    console.log("app started on port 3000");
});