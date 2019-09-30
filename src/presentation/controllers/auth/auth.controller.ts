import { Request, Response } from "express";

export class AuthController {
  private name: string;

  constructor() {
    this.name = "test";
  }

  public login = (req: Request, res: Response) => {
    res.send(`Login ${this.name}`);
  }

  public register = (req: Request, res: Response) => {
    res.send("Registered");
  }

  public logout = (req: Request, res: Response) => {
    res.send("Logout");
  }
}
