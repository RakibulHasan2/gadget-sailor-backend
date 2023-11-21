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

export const favService = {
    addToFav,

}