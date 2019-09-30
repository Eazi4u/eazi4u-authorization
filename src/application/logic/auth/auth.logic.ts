import { IUser, User } from "../../../domain/aggregates/user/user.root-entity";

export class AuthLogic {
  public login = async (): Promise<any> => {
    return "login logic";
  }

  public register = async (): Promise<any> => {
    try {
      const user: IUser = new User({
        username: "mike",
        verified: false,
        verifiedDate: new Date(),
        roles: [],
        createdAt: new Date(),
        createdBy: "name"
      });

      await user.save();
      return "register logic";
    } catch (err) {
      console.log(err);
    }
  }

  public logout = async (): Promise<any> => {
    return "logout logic";
  }
}
