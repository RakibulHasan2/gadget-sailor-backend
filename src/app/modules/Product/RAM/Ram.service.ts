import config from "../../../../config";
import { IRam } from "./Ram.interface";
import { Ram } from "./Ram.model";



// Function to add a processor
const createRam = async (payload: IRam): Promise<IRam|null> => {
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
    const result = await Ram.create(payload);
    return result;
};


const getAllRam = async (): Promise<IRam[]> => {
        const  result= await Ram.find({});
        return result;
};


const getRamById = async (id: string): Promise<IRam | null> => {
    const result = await Ram.findById(id);
    return result;
};


const UpdateRam = async (id: string,payload: Partial<IRam>): Promise<IRam | null> => {
const result = await Ram.findOneAndUpdate({ _id: id }, payload, {new: true});
return result;
};

const deleteRam = async (id: string): Promise<IRam | null> => {
const result = await Ram.findByIdAndDelete(id);
return result;
}

export const RamService = {
createRam,
getAllRam,
getRamById,
UpdateRam,
deleteRam
};