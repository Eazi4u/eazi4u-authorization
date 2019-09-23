import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import colors from "colors";

// Set configuration
dotenv.config();
colors.setTheme({});

const app = express();

app.get("/hello", (req: any, res: any) => {
  res.send("Hello World!");
})

app.listen(3000, () => {
  console.log(`Successfully connected to ${"auth"} lisiting on port ${3000}`.green);
})