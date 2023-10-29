import config from "../../../../config";
import { IBrand_pc } from "./brand_Pc.interface";
import { Brand_pc } from "./brand_Pc.model";




const createBrand_pc = async (payload: IBrand_pc): Promise<IBrand_pc | null> => {
    const min = 100000;
    const max = 999999;
    if (!payload.status) {
        payload.status = config.default_status as string;
    }
    if (!payload.product_code) {

        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        payload.product_code = randomNumber
    }
    const result = await Brand_pc.create(payload);
    return result;
};

const getAllBrand_pc = async (): Promise<IBrand_pc[]> => {

    const result = await Brand_pc.find({});
    return result;

};
const getBrand_pcById = async (id: string): Promise<IBrand_pc | null> => {

    const result = await Brand_pc.findById(id);
    return result;

};

const updateBrand_pc = async (id: string,payload: Partial<IBrand_pc>): Promise<IBrand_pc | null> => {
    const result = await Brand_pc.findOneAndUpdate({ _id: id }, payload, {new: true});
    return result;
  };
  
  const deleteBrand_pc= async (id: string): Promise<IBrand_pc | null> => {
  
        const result = await Brand_pc.findByIdAndDelete(id);
        return result;
};

export const Brand_pcService = {
  createBrand_pc,
  getAllBrand_pc,
  getBrand_pcById,
  updateBrand_pc,
  deleteBrand_pc
};