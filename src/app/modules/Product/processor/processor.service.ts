import config from "../../../../config";
import { IProcessor } from "./processor.interface";
import { Processor } from './processor.model';


const createProcessor = async (payload: IProcessor): Promise<IProcessor|null> => {
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
    const result = await Processor.create(payload);
    return result;
};

export const ProcessorService = {
    createProcessor
};