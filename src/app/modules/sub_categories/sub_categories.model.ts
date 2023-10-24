import { Schema, model } from 'mongoose';
import { ISub_Categories, sub_CategoriesModel } from './sub_categories.interface';



const sub_CategoriesSchema = new Schema<ISub_Categories>(
    {
        categoryName:{
            type: String,
            required: true,
        },
        sub_categoryName: {
            unique: true,
            required: true,
            type: String,
        },
    },
    {
        timestamps: true,
        toJSON: {
            virtuals: true,
        },
    }
);
export const subCategories= model<ISub_Categories, sub_CategoriesModel>('sub-category', sub_CategoriesSchema);
