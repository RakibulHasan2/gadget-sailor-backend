import { IBuild_PC } from "./build_pc.interface";
import { BuildPC } from "./build_pc.model";


// Function to create BuildPC
const createBuildPC = async (payload: IBuild_PC): Promise<IBuild_PC | null> => {
    const result = await BuildPC.create(payload);
    return result;
};

// Function to retrieve all BuildPC
const getAllBuildPC = async (): Promise<IBuild_PC[]> => {
        const Build_PC = await BuildPC.find({});
        return Build_PC;
};

const  getSingleBuildPC = async (id: string): Promise<IBuild_PC | null> => {
    const result = await BuildPC.findById(id);
    return result;
  };

export const BuildPCService = {
    createBuildPC,
    getAllBuildPC,
    getSingleBuildPC
};