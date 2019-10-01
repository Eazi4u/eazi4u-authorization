import colors from "colors";

import { IUser, User } from "../../../domain/aggregates/user/user.root-entity";

export class AuthLogic {
  public login = async (): Promise<any> => {
    return "login logic for test";
  }

  public register = async (newUser: IUser): Promise<any> => {
    try {
      const user = new User(newUser);

      const addedUser = await user.save();
      console.log("Succefully added".green);
      return addedUser;
    } catch (err) {
      console.log(colors.red(err));
      throw err;
    }
  }

  public logout = async (): Promise<any> => {
    return "logout logic";
  }
}
