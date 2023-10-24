import mongoose from "mongoose";
import { IUsers } from "./user.interface";
import { Users } from "./user.model";


// Function to create users
const createUsers = async (payload: IUsers): Promise<IUsers | null> => {
    try {
        const result = await Users.create(payload);
        return result;
    } catch (error) {
        console.error('Error getting all users:', error);
        throw error;
    }
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

//get user by email 
const getUserByEmail = async (email: string): Promise<IUsers | null> => {
    try {
        const user = await Users.findOne({ email });
        return user;
    } catch (error) {
        console.error('Error getting user by id:', error);
        throw error;
    }
};



// delete user by id
const getDeleteUsers = async (id: string): Promise<IUsers | null> => {
    try {
        const result = await Users.findByIdAndDelete(id);
        return result;
    } catch (error) {
        console.error('Error getting user by id:', error);
        throw error;
    }
};



export const UsersService = {
    createUsers,
    getAllUsers,
    getUserByEmail,
    getDeleteUsers
};