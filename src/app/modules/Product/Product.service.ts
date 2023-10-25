import { IProducts } from "./Product.interface";
import { Products } from "./Product.model";

const createProduct = async (payload: IProducts): Promise<IProducts | null> => {
    const result = await Products.create(payload);
    return result;
};

export const ProductsService = {
    createProduct
};
