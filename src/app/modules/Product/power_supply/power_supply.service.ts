import config from "../../../../config";
import { IPower_supply } from "./power_supply.interface";
import { Power_supply } from "./power_supply.model";


const createPower_supply = async (payload: IPower_supply): Promise<IPower_supply | null> => {
    const min = 100000;
    const max = 999999;
    if (!payload.status) {
        payload.status = config.default_status as string;
    }
    if (!payload.product_code) {

        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        payload.product_code = randomNumber
    }
    const result = await Power_supply.create(payload);
    return result;
};

const getAllPower_supply = async (): Promise<IPower_supply[]> => {

        const result = await Power_supply.find({});
        return result;
  
};
const getPower_supplyById = async (id: string): Promise<IPower_supply | null> => {

    const result = await Power_supply.findById(id);
    return result;

};

const updatePower_supply = async (id: string,payload: Partial<IPower_supply>): Promise<IPower_supply | null> => {
    const result = await Power_supply.findOneAndUpdate({ _id: id }, payload, {new: true});
    return result;
  };
  
  const deletePower_supply= async (id: string): Promise<IPower_supply | null> => {
  
        const result = await Power_supply.findByIdAndDelete(id);
        return result;
};


export const Power_supplyService = {
createPower_supply,
getAllPower_supply,
getPower_supplyById,
updatePower_supply,
deletePower_supply
};