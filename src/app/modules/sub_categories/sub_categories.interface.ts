import { Model } from 'mongoose';

export type ISub_Categories = {
  categoryName: string;
  sub_categoryName: string;
};

export type sub_CategoriesModel = Model<ISub_Categories, Record<string, unknown>>;



