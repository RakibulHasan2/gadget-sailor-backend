import { Schema, model } from 'mongoose';
import { Build_PCModel, IBuild_PC } from './build_pc.interface';


const build_pc_Schema = new Schema<IBuild_PC>(
    {
        processor: {
            required: true,
            type:String,
        },
        motherboard: {
            required: true,
            type:String,
        },
        ram: {
            required: true,
            type:String,
        },
        storage: {
            required: true,
            type:String,
        },
        graphics_card: {
            type:String,
        },
        power_supply: {
            required: true,
            type:String,
        },
        casing: {
            type:String,
        },
        monitor: {
            type:String,
        },
        keyboard: {
            type:String,
        },
        mouse: {
            type:String,
        },
        headphones: {
            type:String,
        },
        ups: {
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
export const BuildPC = model<IBuild_PC, Build_PCModel>('build-pc', build_pc_Schema);
