import { Schema, model } from 'mongoose';
import { IRam, IRamModel } from './Ram.interface';




const RamSchema = new Schema<IRam>(
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
            unique:true
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
            required:true
        },
        capacity: {
            type: String,
            required:true
        },
        cas_latency: {
            type: String,
            required:true
        },
        form_factor: {
            type: String,
            required:true
        },
        memory_type: {
            type: String,
            required:true
        },
        speed: {
            type: String,
            required:true
            },
        voltage: {   
            type: String,
            required:true
            },
    },
    {
        timestamps: true,
        toJSON: {
            virtuals: true,
        },
    }
);
export const Ram = model<IRam, IRamModel>('Ram', RamSchema);