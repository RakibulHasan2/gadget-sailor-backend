import config from "../../../../config";
import { IHard_disk } from "./hard_disk.interface";
import { Hard_disk } from "./hard_disk.model";



const createImac = async (payload: IHard_disk): Promise<IHard_disk | null> => {
    const min = 100000;
    const max = 999999;
    if (!payload.status) {
        payload.status = config.default_status as string;
    }
    if (!payload.product_code) {

        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        payload.product_code = randomNumber
    }
    const result = await Hard_disk.create(payload);
    return result;
};

const getAllImacs = async (): Promise<IHard_disk[]> => {

        const result = await Hard_disk.find({});
        return result;

};
const getImacById = async (id: string): Promise<IHard_disk | null> => {

    const result = await Hard_disk.findById(id);
    return result;

};

const updateImac = async (id: string,payload: Partial<IHard_disk>): Promise<IHard_disk | null> => {
    const result = await Hard_disk.findOneAndUpdate({ _id: id }, payload, {new: true});
    return result;
  };
  
  const deleteImac = async (id: string): Promise<IHard_disk | null> => {
  
        const result = await Hard_disk.findByIdAndDelete(id);
        return result;
};


export const ImacService = {
    createImac,
    getAllImacs,
    getImacById,
    updateImac,
    deleteImac
};