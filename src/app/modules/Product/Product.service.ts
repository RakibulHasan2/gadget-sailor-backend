import config from "../../../config";
import { IGamingPc } from "./Gaming_pc/Gamin_pc.interface";
import { IImac } from "./imac/imac.interface";
import { Products } from "./imac/imac.model";

const createProduct = async (payload: IImac | IGamingPc): Promise<IImac|IGamingPc | null> => {
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
