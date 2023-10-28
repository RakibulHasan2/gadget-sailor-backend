import { Schema, model } from 'mongoose';
import { IGamingPc, gamingPcModel } from './Gamin_pc.interface';



const gamingPcSchema = new Schema<IGamingPc>(
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
        motherboard:{
            type:String,
            required: true,
        },
        RAM:{
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
        }
    },
    {
        timestamps: true,
        toJSON: {
            virtuals: true,
        },
    }
);
export const GamingPc = model<IGamingPc, gamingPcModel>('GamingPc', gamingPcSchema);