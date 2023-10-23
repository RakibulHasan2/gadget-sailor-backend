import config from "../../../config/index";
import { IUsers } from "./user.interface";
import { Users } from "./user.model";



const createUsers = async (payload: IUsers): Promise<IUsers | null> => {
    if (!payload.password) {
      payload.password = config.default_USER_pass as string;
    }
    const result = await Users.create(payload);
    return result;
  };


  export const UsersService = {
    createUsers,
  };