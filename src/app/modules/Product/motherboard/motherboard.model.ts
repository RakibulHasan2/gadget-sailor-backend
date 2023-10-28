import { Schema, model } from 'mongoose';
import { IMotherboard, IMotherboardModel } from './motherboard.interface';


const motherboardSchema = new Schema<IMotherboard>(
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
        supported_cpu: {
            type: String,
        },
        chip_set: {
            type: String,
        },
        BIOS: {
            type: String,
        },
        form_factor: {
            type: String
        },
        PCI: {
            type: String
        },
        Slots: {
            type: String
        },
        supported_memory: {
            type: String
        },
        ram_type: {
            type: String
        },
        maximum_mem: {
            type: String
        },
        max_channels: {
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
export const Motherboard = model<IMotherboard, IMotherboardModel>('motherboard', motherboardSchema);