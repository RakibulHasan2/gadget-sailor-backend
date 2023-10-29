import config from "../../../../config";
import { ILaptop } from "./laptop.interface";
import { Laptop } from "./laptop.model";


const createLaptop = async (payload: ILaptop): Promise<ILaptop | null> => {
    const min = 100000;
    const max = 999999;
    if (!payload.status) {
        payload.status = config.default_status as string;
    }
    if (!payload.product_code) {

        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        payload.product_code = randomNumber
    }
    const result = await Laptop.create(payload);
    return result;
};

const getAllLaptop = async (): Promise<ILaptop[]> => {

        const result = await Laptop.find({});
        return result;
  
};
const getLaptopById = async (id: string): Promise<ILaptop | null> => {

    const result = await Laptop.findById(id);
    return result;

};

const updateLaptop = async (id: string,payload: Partial<ILaptop>): Promise<ILaptop | null> => {
    const result = await Laptop.findOneAndUpdate({ _id: id }, payload, {new: true});
    return result;
  };
  
  const deleteLaptop = async (id: string): Promise<ILaptop | null> => {
  
        const result = await Laptop.findByIdAndDelete(id);
        return result;
};


export const LaptopService = {
createLaptop,
getAllLaptop,
getLaptopById,
updateLaptop,
deleteLaptop
};