import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/config.js";
import authRoutes from "./routes/authRoutes.js";
import cors from 'cors'

const app = express();

dotenv.config();
connectDB();

app.use(express.json());
app.use(cors("*"))

app.use("/auth", authRoutes);

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(5000, () => {
    console.log("app started on port 3000");
});