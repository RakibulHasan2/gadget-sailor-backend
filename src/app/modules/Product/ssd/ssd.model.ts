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
        interface: {
            type: String,
        },
        flash_type: {
            type: String,
        },
        read_speed: {
            type: String
        },
        write_speed: {
            type: String
        },
        MTBF: {
            type: String
        },
        dimension: {
            type: String
        },
        weight: {
            type: String
        },
        operating_temperature: {
            type: String
        },
        storage_temperature: {
            type: String
        },
        form_factor: {
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