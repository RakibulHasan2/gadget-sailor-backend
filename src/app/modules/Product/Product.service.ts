import config from "../../../config";
import { IGamingPc } from "./Gaming_pc/Gamin_pc.interface";
import { IImac } from "./imac/imac.interface";
import { Products } from "./imac/imac.model";
import { IProcessor } from "./processor/processor.interface";

const createProduct = async (payload: IImac | IGamingPc | IProcessor): Promise<IImac|IGamingPc|IProcessor|null> => {
    const min = 100000;
    const max = 999999;
    if (!payload.status) {
        payload.status = config.default_status as string;
    }
    if (!payload.product_code) {

        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        payload.product_code = randomNumber
    }
    console.log();
    const result = await Products.create(payload);
    return result;
};

export const ProductsService = {
    createProduct
};
