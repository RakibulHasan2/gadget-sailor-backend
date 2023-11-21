import { IFav } from "./favourites.interface";
import { fav } from "./favourites.model";

//function to add in favourites
const addToFav = async (payload: IFav): Promise<IFav | null> => {
    try {
        const result = await fav.create(payload);
        return result;
    }
    catch (error) {
        console.error('Error creating cart:', error);
        throw error;
    }
}

// Function to retrieve data from favourite list
const getFromFav = async (): Promise<IFav[]> => {
    const result = await fav.find({});
    return result;
};


export const favService = {
    addToFav,
    getFromFav,
}