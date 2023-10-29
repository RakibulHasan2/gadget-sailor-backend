import { Schema, model } from 'mongoose';
import { IHard_disk, hard_diskModel } from './hard_disk.interface';





const hard_diskSchema = new Schema<IHard_disk>(
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
            required: true,
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
            type: Number,
            required: true,
        },
        product_code: {
            type: Number,
        },
        status: {
            type: String,
        },
        reviews: {
            type: [],

        },
        warranty: {
            type: String,
            required: true,
        },

        // 
        cache:{
            type:String,
            required:true
        },
        capacity:{
            type:String,
            required:true
        },
        form_factor:{
            type:String,
            required:true
        },
        interface:{
            type:String,
            required:true
        },
         rotation_speed:{
            type:String,
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
export const Hard_disk = model<IHard_disk, hard_diskModel>('Imacs', hard_diskSchema);
