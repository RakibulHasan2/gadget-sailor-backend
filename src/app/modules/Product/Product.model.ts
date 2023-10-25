import { Schema, model } from 'mongoose';
import { IProducts, ProductModel } from './Product.interface';
import { status } from './Products.constant';


const productsSchema = new Schema<IProducts>(
    {
        categoryName: {
            required: true,
            type:String,
            unique: true
        },
        sub_categoryName:{
            required: true,
            type:String,
            unique: true
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
            enum:status
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
        motherboard:{
            type:String,
        },
        RAM:{
            type:String,
        },
        graphics_card:{
            type:String,
        },
        powerSupply:{
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
export const Products = model<IProducts, ProductModel>('Products', productsSchema);