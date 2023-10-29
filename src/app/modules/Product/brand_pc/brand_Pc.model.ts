import { Schema, model } from 'mongoose';
import { IBrand_pc, brand_PcModel } from './brand_Pc.interface';




const brand_PcSchema = new Schema<IBrand_pc>(
    {
        categoryName: {
            required: true,
            type: String,
        },
        sub_categoryName: {
            required: true,
            type: String,
        },
        brand_name: {
            type: String,
            required: true
        },
        product_name: {
            required: true,
            type: String,
        },
        image: {
            required: true,
            type:String,
        },
        model: {
            type: String,
        },
        description: {
            required: true,
            type: String
        },
        price: {
            type: Number,
            required: true
        },
        product_code: {
            type: Number
        },
        status: {
            type: String,
        },
        reviews: {
            type: [],

        },
        warranty: {
            type: String,
            required: true
        },
        //------------------
        motherboard:{
            type:String,
            required: true,
        },
        ram:{
            type:String,
            required: true,
        },
        graphics_card:{
            type:String,
            required: true,
        },
        powerSupply:{
            type:String,
            required: true,
        },
        storage:{
            type:String,
            required: true,
        },
        processor:{
            type:String,
            required: true,
        }
    },
    {
        timestamps: true,
        toJSON: {
            virtuals: true,
        },
    }
);
export const Brand_pc = model<IBrand_pc, brand_PcModel>('brand_pc', brand_PcSchema);