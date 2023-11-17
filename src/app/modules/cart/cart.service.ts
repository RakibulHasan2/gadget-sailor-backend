import { ICategory } from "../categories/categories.interface";
import { ICart } from "./cart.interface";
import { cart } from "./cart.model";

//function to create cart
const createCart = async (payload: ICart): Promise<ICart | null | any> => {
    try {
        const result = await cart.create(payload);
        return result;
    }
    catch (error) {
        console.error('Error creating cart:', error);
        throw error;
    }
}

// Function to retrieve data from cart
const getFromCart = async (): Promise<ICart[]> => {
    try {
        const result = await cart.find({});
        return result;
    } catch (error) {
        console.error('Error getting data from cart:', error);
        throw error;
    }
};




export const cartService = {
    createCart,
    getFromCart
}