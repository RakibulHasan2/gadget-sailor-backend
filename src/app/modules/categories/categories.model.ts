import { Schema, model } from 'mongoose';
import { CategoryModel, ICategory } from './categories.interface';


const categoriesSchema = new Schema<ICategory>(
    {
        categoryName: {
            required: true,
            type:String,
            unique: true
        },
    },
    {
        timestamps: true,
        toJSON: {
            virtuals: true,
        },
    }
);
export const Categories = model<ICategory, CategoryModel>('Categories', categoriesSchema);
