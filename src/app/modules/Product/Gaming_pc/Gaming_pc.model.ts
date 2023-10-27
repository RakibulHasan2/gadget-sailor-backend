import { Schema, model } from 'mongoose';
import { IGamingPc, gamingPcModel } from './Gamin_pc.interface';



const gamingPcSchema = new Schema<IGamingPc>(
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
export const GamingPc = model<IGamingPc, gamingPcModel>('Products', gamingPcSchema);