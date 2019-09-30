import { Request, Response } from "express";

import { AuthLogic } from "../../../application/logic/auth/auth.logic";

export class AuthController {
  private authLogic: AuthLogic;

  constructor() {
    this.authLogic = new AuthLogic();
  }

  public login = async (req: Request, res: Response) => {
    res.send(await this.authLogic.login());
  }

  public register = async (req: Request, res: Response) => {
    res.send(await this.authLogic.register());
  }

  public logout = async (req: Request, res: Response) => {
    res.send(await this.authLogic.logout());
  }
}
