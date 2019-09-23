import colors from "colors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";

import authMiddlewareRouter from "./presentation/middleware/auth-routes.middleware";

// Set configuration
dotenv.config();
colors.setTheme({});

const app = express();

// Middleware
app.use(authMiddlewareRouter);

app.get("/hello", (req: any, res: any) => {
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log(`Successfully connected to ${"auth"} lisiting on port ${3000}`.green);
});
