import { Schema, model } from 'mongoose';
import { IProcessor, IProcessorModel,} from './processor.interface';



const processorSchema = new Schema<IProcessor>(
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
        base_speed: {
            type: String,
        },
        max_speed: {
            type: String,
        },
        default_tdp: {
            type: String,
        },
        l2_cache: {
            type: String
        },
        l3_cache: {
            type: String
            },
        cores: {   
            type: String
            },
        threads: {
            type: String
            },
        ram_type: {
            type: String
            },
        maximum_speed: {
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
export const Processor = model<IProcessor, IProcessorModel>('processor', processorSchema);