import { Model } from 'mongoose';


export type ICategory = {
  name: string;
  email: string;
  password: string;
  phoneNumber: number;
};

export type CategoryModel = Model<ICategory, Record<string, unknown>>;