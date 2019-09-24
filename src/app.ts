import colors from "colors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";

import authMiddlewareRouter from "./presentation/middleware/auth-routes.middleware";

// Set configuration
dotenv.config();
colors.setTheme({});

// import this after dotenv was set
import config from "./config";
console.log("config: ".yellow, colors.yellow(config));

const app = express();

// Middleware
app.use(authMiddlewareRouter);

app.get("/hello", (req: any, res: any) => {
  res.send("Hello World!");
});

app.listen(config.node_port, () => {
  console.log(`Successfully connected to ${config.app_name} lisiting on port ${config.node_port}`.green);
});
