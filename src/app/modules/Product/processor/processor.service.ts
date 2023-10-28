import config from "../../../../config";
import { IProcessor } from "./processor.interface";
import { Processor } from './processor.model';


// Function to add a processor
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

// Function to retrieve all processors
const getAllProcessor = async (): Promise<IProcessor[]> => {
        const categories = await Processor.find({});
        return categories;
};

//get products by id
const getProcessorById = async (id: string): Promise<IProcessor | null> => {
    const user = await Processor.findById(id);
    return user;
};

//update products by Id
const UpdateProcessor = async (id: string,payload: Partial<IProcessor>): Promise<IProcessor | null> => {
const result = await Processor.findOneAndUpdate({ _id: id }, payload, {new: true});
return result;
};

// delete products by id
const getDeleteProcessor = async (id: string): Promise<IProcessor | null> => {
const result = await Processor.findByIdAndDelete(id);
return result;
}

export const ProcessorService = {
    createProcessor,
    getAllProcessor,
    getProcessorById,
    UpdateProcessor,
    getDeleteProcessor
};