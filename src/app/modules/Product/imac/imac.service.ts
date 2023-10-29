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

const getAllImacs = async (): Promise<IImac[]> => {
    try {
        const result = await Imac.find({});
        return result;
    } catch (error) {
        console.error('Error getting all imacs:', error);
        throw error;
    }
};
const getImacById = async (id: string): Promise<IImac | null> => {

    const result = await Imac.findById(id);
    return result;

};

const updateImac = async (id: string,payload: Partial<IImac>): Promise<IImac | null> => {
    const result = await Imac.findOneAndUpdate({ _id: id }, payload, {new: true});
    return result;
  };
  
  const deleteImac = async (id: string): Promise<IImac | null> => {
  
        const result = await Imac.findByIdAndDelete(id);
        return result;
};


export const ImacService = {
    createImac,
    getAllImacs,
    getImacById,
    updateImac,
    deleteImac
};