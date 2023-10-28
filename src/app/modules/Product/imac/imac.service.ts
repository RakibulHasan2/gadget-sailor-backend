import config from "../../../../config";
import { IImac } from "./imac.interface";
import { Imac } from "./imac.model";


const createImac = async (payload: IImac): Promise<IImac | null> => {
    const min = 100000;
    const max = 999999;
    if (!payload.status) {
        payload.status = config.default_status as string;
    }
    if (!payload.product_code) {

        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        payload.product_code = randomNumber
    }
    const result = await Imac.create(payload);
    return result;
};

export const ImacService = {
    createImac
};