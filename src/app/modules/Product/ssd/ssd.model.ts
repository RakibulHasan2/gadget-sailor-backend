import { Schema, model } from 'mongoose';
import { ISSD, ISSDModel } from './ssd.interface';


const ssdSchema = new Schema<ISSD>(
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
            unique: true,
            required: true,
            type: String,
        },
        image: {
            required: true,
            type: String,
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
        capacity: {
            type: String,
        },
        input_voltage: {
            type: String,
        },
        output_voltage: {
            type: String,
        },
        frequency: {
            type: String
        },
        noise_level: {
            type: String
        },
        batteryBackup_time: {
            type: String
        },
        color: {
            type: String
        },
        weight: {
            type: String
        },
        dimensions: {
            type: String
        }
    },
    {
        timestamps: true,
        toJSON: {
            virtuals: true,
        },
    }
);
export const SSD = model<ISSD, ISSDModel>('ssd', ssdSchema);