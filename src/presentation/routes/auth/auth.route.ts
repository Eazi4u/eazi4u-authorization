import express from "express";

const authRouter = express.Router();

authRouter.get("/login", (req: any, res: any) => {
  return res.send("login");
});

export default authRouter;
