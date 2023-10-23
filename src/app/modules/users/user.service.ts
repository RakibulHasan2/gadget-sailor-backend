import config from "../../../config/index";
import { IUsers } from "./user.interface";
import { Users } from "./user.model";


// Function to create users
const createUsers = async (payload: IUsers): Promise<IUsers | null> => {
    if (!payload.password) {
        payload.password = config.default_USER_pass as string;
    }
    const result = await Users.create(payload);
    return result;
};

// Function to retrieve all users
const getAllUsers = async (): Promise<IUsers[]> => {
    try {
        const users = await Users.find({});
        return users;
    } catch (error) {
        console.error('Error getting all users:', error);
        throw error;
    }
};


export const UsersService = {
    createUsers,
    getAllUsers
};