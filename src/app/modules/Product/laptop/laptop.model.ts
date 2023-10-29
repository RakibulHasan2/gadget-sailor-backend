import { Schema, model } from 'mongoose';
import { ILaptop, LaptopModel } from './laptop.interface';





const LaptopSchema = new Schema<ILaptop>(
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
        display:{
            type:String,
            required:true
        },
        processor:{
            type:String,
            required:true
        },
        memory:{
            type:String,
            required:true
        },
        storage:{
            type:String,
            required:true
        },
        graphics:{
            type:String,
            required:true
        },
        max_ram_capacity:{
            type:String,
            required:true
        },
        operating_system:{
            type:String,
            required:true
        },
        adapter_type:{
            type:String,
            required:true
        },
        audio_features:{
            type:String,
            required:true
        },
        battery_capacity:{
            type:String,
            required:true
        },
        battery_type:{
            type:String,
            required:true
        },
        Bluetooth:{
            type:String,
            required:true
        },
        Generation:{
            type:String,
            required:true
        },
        HDMI_Port:{
            type:String,
            required:true
        },
        head_micro_port:{
            type:String,
            required:true
        },
        Lan:{
            type:String,
            required:true
        },
        microphone:{
            type:String,
            required:true
        },
        speaker:{
            type:String,
            required:true
        },
        total_ram_slot:{
            type:String,
            required:true
        },
        USB_2_port:{
            type:String,
            required:true
        },
        USB_3_port:{
            type:String,
            required:true
        },
        USB_type_C:{
            type:String,
            required:true
        },
        webCam:{
            type:String,
            required:true
        },
        weight:{
            type:String,
            required:true
        },
        wifi:{
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
export const Laptop = model<ILaptop, LaptopModel>('laptop', LaptopSchema);
