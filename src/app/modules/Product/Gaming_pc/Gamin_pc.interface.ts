import { Model } from 'mongoose';
import { IGlobalProducts } from '../globalProducts.interface';
export type GamingPc = {
  //interface for gaming pc
  motherboard: string;
  RAM: string;
  graphics_card: string;
  powerSupply: string;
  storage:string
  processor:string
}
export type IGamingPc = IGlobalProducts & GamingPc

export type gamingPcModel = Model<IGamingPc, Record<string, unknown>>;