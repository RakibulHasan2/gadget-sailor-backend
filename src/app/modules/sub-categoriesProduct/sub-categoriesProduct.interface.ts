import { Model } from 'mongoose';


export type ISubCAtegoryProduct = {
  sub_categoryName: string;
  product_name:string;
  image:string;
  model: string;
  display:string ;
  processor: string;
  memory:string;
  storage:string;
  graphics: string;
  description:string;
  price:number;
  status: "in-stock"| "shock-out",
  product_code:number
  reviews:string;
}

export type SubCategoryProduct = Model<ISubCAtegoryProduct, Record<string, unknown>>;