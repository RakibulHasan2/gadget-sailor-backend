import config from "../../../../config";
import { IGamingHeadphone } from "./gaming_headphone.interface";
import { GamingHeadphone } from "./gaming_headphone.model";





// Function to add a processor
const createGamingHeadphone= async (payload: IGamingHeadphone): Promise<IGamingHeadphone|null> => {
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
    const result = await GamingHeadphone.create(payload);
    return result;
};


const getAllGamingHeadphone = async (): Promise<IGamingHeadphone[]> => {
        const  result= await GamingHeadphone.find({});
        return result;
};


const getGamingHeadphoneById = async (id: string): Promise<IGamingHeadphone | null> => {
    const result = await GamingHeadphone.findById(id);
    return result;
};


const UpdateGamingHeadphone = async (id: string,payload: Partial<IGamingHeadphone>): Promise<IGamingHeadphone | null> => {
const result = await GamingHeadphone.findOneAndUpdate({ _id: id }, payload, {new: true});
return result;
};

const deleteGamingHeadphone = async (id: string): Promise<IGamingHeadphone | null> => {
const result = await GamingHeadphone.findByIdAndDelete(id);
return result;
}

export const GamingHeadphoneService = {
createGamingHeadphone,
getAllGamingHeadphone,
getGamingHeadphoneById,
UpdateGamingHeadphone,
deleteGamingHeadphone

};