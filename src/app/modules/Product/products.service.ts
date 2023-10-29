import config from "../../../config";
import { IProducts } from "./products.interface";
import { Products } from "./products.model";

// create Products function
const createProducts = async (payload: IProducts): Promise<IProducts | null | any> => {
    const min = 100000;
    const max = 999999;

    if (!payload.status) {
        payload.status = config.default_status as string;
    }

    if (!payload.product_code) {

        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        payload.product_code = randomNumber
    }

    const updateProduct = Object.keys(payload.others_info)
    let obj: object | any = { ...payload }

    for (const element of updateProduct) {
        obj[element] = obj.others_info[element];
    }

    if (obj.others_info) {
        delete obj?.others_info;
    }

    const result = await Products.create(obj);
    return result;
};

export const ProductsService = {
    createProducts
}