// url where i deployed this app on vercel --> https://auth-express-mongodb-boilerplate-ctdl023tf.vercel.app/

import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/config.js";
import authRoutes from "./routes/authRoutes.js";

const app = express();

dotenv.config();
connectDB();

app.use(express.json());

app.use("/auth", authRoutes);

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(5000, () => {
    console.log("app started on port 3000");
});