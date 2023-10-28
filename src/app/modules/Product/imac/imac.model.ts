import { Schema, model } from 'mongoose';
import { IImac, imacModel } from './imac.interface';




const imacSchema = new Schema<IImac>(
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
            type: String
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
            type: Number
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
        },

        // 
        display:{
            type:String,
            required:true
        },
        processor:{
            type:String,
            required:true
        },
        memory:{
            type:String,
            required:true
        },
        storage:{
            type:String,
            required:true
        },
        graphics:{
            type:String,
            required:true
        },
        ram:{
            type:String,
            required:true
        },
        operating_system:{
            type:String,
            required:true
        },
        keyboard:{
            type:String,
        },
        mouse:{
            type:String,
        },
        external_ports:{
            type:String,
        }
    },
    {
        timestamps: true,
        toJSON: {
            virtuals: true,
        },
    }
);
export const Imac = model<IImac, imacModel>('Imacs', imacSchema);
