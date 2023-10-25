import { Model } from 'mongoose';

export type Istatus =  "in-stock" | "shock - out"
export type IProducts = {
  //common components for all data
  categoryName: string;
  sub_categoryName: string;
  product_name: string;
  image: string;
  model: string;
  description: string;
  price: number;
  product_code: number
  status:Istatus;
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