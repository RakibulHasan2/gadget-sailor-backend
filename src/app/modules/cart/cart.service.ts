import { ICart } from "./cart.interface";
import { cart } from "./cart.model";

//function to create cart
const createCart = async (payload: ICart): Promise<ICart | null> => {
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


// Function to retrieve data from cart by email
const getCartDataByEmail = async (Email: string): Promise<ICart | ICart[] | null> => {
    if (Email.match(/^[0-9a-fA-F]{24}$/)) {
        const result = await cart.findById(Email);
        return result;

    }

    else {
        const result = await cart.find({
            $or: [
                { email: Email },

            ]
        });
        return result;
    }

};



export const cartService = {
    createCart,
    getFromCart,
    getCartDataByEmail,
}