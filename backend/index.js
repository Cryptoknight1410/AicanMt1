import express from "express";
import Connection from "../backend/connection.js";
import dotenv from "dotenv";
import cors from 'cors';
import calling from "./routes/route.js";

dotenv.config();
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const PORT = 5000;
const app = express();
app.use(cors());
app.listen(PORT, () => {
  console.log(`Server Started on Port ${PORT}`);
});

Connection(USERNAME, PASSWORD);

calling(app);
