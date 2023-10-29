import { Schema, model } from 'mongoose';
import { GamingHeadphoneModel, IGamingHeadphone } from './gaming_headphone.interface';





const GamingHeadphoneSchema = new Schema<IGamingHeadphone>(
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
        //-------------------
        cable_length: {
            type: String,
            required:true
        },
        color: {
            type: String,
            required:true
        },
        connection_type: {
            type: String,
            required:true
        },
        features: {
            type: String,
            required:true
        },
        headphone_type: {
            type: String,
            required:true
            },
        microphone: {   
            type: String,
            required:true
            },
        rgb: {   
            type: String,
            required:true
            },
        sound_quality: {   
            type: String,
            required:true
            }
    },
    {
        timestamps: true,
        toJSON: {
            virtuals: true,
        },
    }
);
export const GamingHeadphone = model<IGamingHeadphone, GamingHeadphoneModel>('gaming_Headphone', GamingHeadphoneSchema);