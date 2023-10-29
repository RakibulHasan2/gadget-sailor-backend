import { Schema, model } from 'mongoose';
import { IPower_supply, power_supplyModel } from './power_supply.interface';





const power_supplySchema = new Schema<IPower_supply>(
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
        AC_input:{
            type:String,
            required:true
        },
        CPU:{
            type:String,
            required:true
        },
         current:{
            type:String,
            required:true
        },
        DC_input:{
            type:String,
            required:true
        },
        efficiency_rating:{
            type:String,
            required:true
        },
        fan_size:{
            type:String,
            required:true
        },
        frequency_range:{
            type:String,
            required:true
        },
        main_power:{
            type:String,
        },
        modularity:{
            type:String,
        },
        protections:{
            type:String,
        },
        SATA:{
            type:String,
        },
        voltage:{
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
export const Power_supply = model<IPower_supply, power_supplyModel>('power_supply', power_supplySchema);
