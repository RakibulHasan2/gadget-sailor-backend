import { Model } from 'mongoose';

export type IStatus =  "in-stock" | "stock-out"
export type IProducts = {
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
  status:IStatus;
  reviews: string[];
  //interface for imac
  display: string;
  processor: string;
  memory: string;
  storage: string;
  graphics: string;
  //interface for gaming pc
  motherboard: string;
  RAM: string;
  graphics_card: string;
  powerSupply: string;
}

export type ProductModel = Model<IProducts, Record<string, unknown>>;