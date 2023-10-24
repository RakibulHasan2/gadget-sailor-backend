import { ISub_Categories } from "./sub_categories.interface";
import { subCategories } from './sub_categories.model';



// Function to create categories
const create_SubCategories = async (payload: ISub_Categories): Promise<ISub_Categories| null> => {
    const result = await subCategories.create(payload);
    return result;
};


export const CategoriesService = {
    create_SubCategories,
};