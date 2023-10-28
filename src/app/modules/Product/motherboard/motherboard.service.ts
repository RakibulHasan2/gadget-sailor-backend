import config from "../../../../config";
import { IMotherboard } from "./motherboard.interface";
import { Motherboard } from "./motherboard.model";


// Function to add a Motherboard
const createMotherboard = async (payload: IMotherboard): Promise<IMotherboard|null> => {
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
    const result = await Motherboard.create(payload);
    return result;
};

// Function to retrieve all Motherboards
const getAllMotherboard = async (): Promise<IMotherboard[]> => {
        const motherboards = await Motherboard.find({});
        return motherboards;
};

//get products by id
const getMotherboardById = async (id: string): Promise<IMotherboard | null> => {
    const motherboard = await Motherboard.findById(id);
    return motherboard;
};

//update products by Id
const UpdateMotherboard = async (id: string,payload: Partial<IMotherboard>): Promise<IMotherboard | null> => {
const result = await Motherboard.findOneAndUpdate({ _id: id }, payload, {new: true});
return result;
};

// delete products by id
const getDeleteMotherboard = async (id: string): Promise<IMotherboard | null> => {
const result = await Motherboard.findByIdAndDelete(id);
return result;
}

export const MotherboardService = {
    createMotherboard,
    getAllMotherboard,
    getMotherboardById,
    UpdateMotherboard,
    getDeleteMotherboard
};