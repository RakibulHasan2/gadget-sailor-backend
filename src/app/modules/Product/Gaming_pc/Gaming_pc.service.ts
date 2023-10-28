import config from "../../../../config";
import { IGamingPc } from "./Gamin_pc.interface";
import { GamingPc } from "./Gaming_pc.model";



const createGamingPc = async (payload: IGamingPc): Promise<IGamingPc | null> => {
    const min = 100000;
    const max = 999999;
    if (!payload.status) {
        payload.status = config.default_status as string;
    }
    if (!payload.product_code) {

        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        payload.product_code = randomNumber
    }
    const result = await GamingPc.create(payload);
    return result;
};

const getAllGamingPc = async (): Promise<IGamingPc[]> => {

    const gamingPc = await GamingPc.find({});
    return gamingPc;

};
const getGamingPcById = async (id: string): Promise<IGamingPc | null> => {

    const result = await GamingPc.findById(id);
    return result;

};

const updateGamingPc = async (id: string,payload: Partial<IGamingPc>): Promise<IGamingPc | null> => {
    const result = await GamingPc.findOneAndUpdate({ _id: id }, payload, {new: true});
    return result;
  };
  
  const getDeleteGamingcPc = async (id: string): Promise<IGamingPc | null> => {
  
        const result = await GamingPc.findByIdAndDelete(id);
        return result;
};

export const GamingPcService = {
    createGamingPc,
    getAllGamingPc,
    getGamingPcById,
    updateGamingPc,
    getDeleteGamingcPc
};