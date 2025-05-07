import express from "express";
import cors from "cors";
import balanceSheetRoutes from "./api/routes/balanceSheet.routes";
import { errorHandler } from "./middleware/errorHandler";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.SERVER_PORT || 4000;
// configuration for handling cross origin requests
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.json());

// Routes
app.use("/api/balance-sheet", balanceSheetRoutes);

// Global Error Handler
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

export default app;
