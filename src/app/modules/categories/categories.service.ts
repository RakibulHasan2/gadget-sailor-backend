import { ICategory } from "./categories.interface";
import { Categories } from "./categories.model";


// Function to create categories
const createCategories = async (payload: ICategory): Promise<ICategory | null> => {
    const result = await Categories.create(payload);
    return result;
};

// Function to retrieve all categories
const getAllCategories = async (): Promise<ICategory[]> => {
    try {
        const categories = await Categories.find({});
        return categories;
    } catch (error) {
        console.error('Error getting all categories:', error);
        throw error;
    }
};

export const UsersService = {
    createCategories,
    getAllCategories
};