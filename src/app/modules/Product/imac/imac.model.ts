import { Schema, model } from 'mongoose';
import { IImac,  imacModel } from './imac.interface';


const imacSchema = new Schema<IImac>(
    {
        categoryName: {
            required: true,
            type:String,
        },
        sub_categoryName:{
            required: true,
            type:String,
        },
        brand_name:{
            type:String
        },
        product_name:{
            required: true,
            type:String,
        },
        image:{
            type:String
        },
        model:{
            type:String,
        },
        description:{
            required: true,
            type:String
        },
        price:{
            type:Number
        },
        product_code:{
            type:Number
        },
        status:{
            type:String,
        },
        display:{
            type:String,

        },
        processor:{
            type:String,
        },
        memory:{
            type:String,
        },
        storage:{
            type:String,
        },
        graphics:{
            type:String,
        },
        reviews:{
            type:[]
        }
    },
    {
        timestamps: true,
        toJSON: {
            virtuals: true,
        },
    }
);
export const Imac = model<IImac, imacModel>('Products', imacSchema);