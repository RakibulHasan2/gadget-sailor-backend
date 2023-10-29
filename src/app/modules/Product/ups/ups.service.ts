import config from "../../../../config";
import { IUPS } from "./ups.interface";
import { UPS } from "./ups.model";


// Function to add a UPS
const createUPS = async (payload: IUPS): Promise<IUPS|null> => {
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
    const result = await UPS.create(payload);
    return result;
};

// Function to retrieve all UPSs
const getAllUPS = async (): Promise<IUPS[]> => {
        const UPSs = await UPS.find({});
        return UPSs;
};

//get UPS by id
const getUPSById = async (id: string): Promise<IUPS | null> => {
    const ups = await UPS.findById(id);
    return ups;
};

//update UPS by Id
const UpdateUPS = async (id: string,payload: Partial<IUPS>): Promise<IUPS | null> => {
const result = await UPS.findOneAndUpdate({ _id: id }, payload, {new: true});
return result;
};

// delete UPS by id
const getDeleteUPS = async (id: string): Promise<IUPS | null> => {
const result = await UPS.findByIdAndDelete(id);
return result;
}

export const UPSService = {
    createUPS,
    getAllUPS,
    getUPSById,
    UpdateUPS,
    getDeleteUPS
};