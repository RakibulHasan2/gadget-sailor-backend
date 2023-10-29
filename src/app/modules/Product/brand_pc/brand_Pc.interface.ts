import { Model } from 'mongoose';
import { IGlobalProducts } from '../globalProducts.interface';


export type Brand_pc = {

    
    processor: string,
    storage:string,
    graphics_card:string,
    ram:string,
    powerSupply:string,
    motherboard:string

}

export type IBrand_pc = IGlobalProducts & Brand_pc

export type brand_PcModel = Model<IBrand_pc, Record<string, unknown>>;