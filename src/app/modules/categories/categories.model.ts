import { Schema, model } from 'mongoose';
import { CategoryModel, ICategory } from './categories.interface';


const userSchema = new Schema<ICategory>(
    {
        name: {
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
export const Users = model<ICategory, CategoryModel>('Users', userSchema);
