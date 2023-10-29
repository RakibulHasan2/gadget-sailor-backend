import config from "../../../../config";
import { ISSD } from "./ssd.interface";
import { SSD } from "./ssd.model";



// Function to add a SSD
const createSSD = async (payload: ISSD): Promise<ISSD|null> => {
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
    const result = await SSD.create(payload);
    return result;
};

// Function to retrieve all SSDs
const getAllSSD = async (): Promise<ISSD[]> => {
        const SSDs = await SSD.find({});
        return SSDs;
};

//get SSD by id
const getSSDById = async (id: string): Promise<ISSD | null> => {
    const ssd = await SSD.findById(id);
    return ssd;
};

//update SSD by Id
const UpdateSSD = async (id: string,payload: Partial<ISSD>): Promise<ISSD | null> => {
const result = await SSD.findOneAndUpdate({ _id: id }, payload, {new: true});
return result;
};

// delete SSD by id
const getDeleteSSD = async (id: string): Promise<ISSD | null> => {
const result = await SSD.findByIdAndDelete(id);
return result;
}

export const SSDService = {
    createSSD,
    getAllSSD,
    getSSDById,
    UpdateSSD,
    getDeleteSSD
};