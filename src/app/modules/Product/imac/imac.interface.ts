import { Model } from 'mongoose';
export type IImac = {
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
  //interface for imac
  display: string;
  processor: string;
  memory: string;
  storage: string;
  graphics: string;
}

export type imacModel = Model<IImac, Record<string, unknown>>;