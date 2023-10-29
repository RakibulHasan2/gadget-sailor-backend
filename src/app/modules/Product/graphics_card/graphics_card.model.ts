import { Schema, model } from 'mongoose';
import { IGraphics_CardModel, IGraphics_card } from './graphics_card.interface';



const Graphics_CardSchema = new Schema<IGraphics_card>(
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
            required: true,
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
        memory_size: {
            type: String,
        },
        chip_set: {
            type: String,
        },
        memory_bus: {
            type: String,
        },
        core_clock: {
            type: String
        },
        ray_tracing_cores: {
            type: String
        },
        ray_tracing_performance: {
            type: String
        },
        base_speed: {
            type: String
        },
        boost: {
            type: String
        },
        memory_clock: {
          type: String
        },
        output: {
            type:String
        },
        size: {
            type:String
        }, 
        Cuda_Cores: {
            type:String
        }, 
        D_port: {
            type:String
        },
        hdmi: {
            type:String
        },
        connectors: {
            type:String
        },
        psu: {
            type:String
        },
        directX: {
            type:String
        },
        openGL: {
            type:String
        },
        dimension: {
            type:String
        }
    },
    {
        timestamps: true,
        toJSON: {
            virtuals: true,
        },
    }
);
export const Graphics_Card = model<IGraphics_card, IGraphics_CardModel>('graphics-card', Graphics_CardSchema);