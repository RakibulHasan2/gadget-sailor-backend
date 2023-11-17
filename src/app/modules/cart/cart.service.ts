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

export const cartService = {
    createCart,
}