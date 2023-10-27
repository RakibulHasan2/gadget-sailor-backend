import { Model } from 'mongoose';
export type IGamingPc = {
  //common components for all data
  categoryName: string;
  sub_categoryName: string;
  brand_name:string;
  product_name: string;
  image: string;
  model: string;
  description: string;
  price: number;
  product_code: number
  status:string;
  reviews: string[];
  //interface for gaming pc
  motherboard: string;
  RAM: string;
  graphics_card: string;
  powerSupply: string;
}

export type gamingPcModel = Model<IGamingPc, Record<string, unknown>>;