import express from "express";
import { connectDB } from "./config/db.js";
import cardRoutes from "./routes/cards.routes.js";
import serverless from "serverless-http";

const app = express();

app.use(express.json());

connectDB();

app.use("/cards", cardRoutes);

export const handler = serverless(app);
