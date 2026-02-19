import express from "express";
import { connectDB } from "./config/db.js";
import cardRoutes from "./routes/cards.routes.js";

const app = express();

app.use(express.json());

// Connect MongoDB
connectDB();

// Routes
app.use("/cards", cardRoutes);

// IMPORTANT FOR RENDER
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
