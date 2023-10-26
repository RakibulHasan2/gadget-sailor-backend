import config from "../../../config";
import { IProducts } from "./Product.interface";
import { Products } from "./Product.model";

const createProduct = async (payload: IProducts): Promise<IProducts | null> => {
    const min = 100000;
    const max = 999999;
    if (!payload.status) {
        payload.status = config.default_status as string;
    }
    if (!payload.product_code) {

        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        payload.product_code = randomNumber
    }
    const result = await Products.create(payload);
    return result;
};

export const ProductsService = {
    createProduct
};
