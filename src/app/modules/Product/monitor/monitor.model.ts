import { Schema, model } from 'mongoose';
import { IMonitor, monitorModel } from './monitor.interface';






const monitorSchema = new Schema<IMonitor>(
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
            required: true,
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

        //........
         aspect_ratio:{
            type:String,
            required:true
        },
        audio_features:{
            type:String,
            required:true
        },
        brightness:{
            type:String,
            required:true
        },
        color:{
            type:String,
            required:true
        },
        color_gamut:{
            type:String,
            required:true
        },
        color_support:{
            type:String,
            required:true
        },
        connectivity:{
            type:String,
            required:true
        },
        contrast_ratio:{
            type:String,
            required:true
        },
        dimensions:{
            type:String,
            required:true
        },
        display_size:{
            type:String,
            required:true
        },
        display_surface:{
            type:String,
            required:true
        },
        display_type:{
            type:String,
            required:true
        },
        features:{
            type:String,
            required:true
        },
        free_sync_support:{
            type:String,
            required:true
        },
        g_sync_support:{
            type:String,
            required:true
        },
        hdcp:{
            type:String,
            required:true
        },
        hdr:{
            type:String,
            required:true
        },
        panel_type:{
            type:String,
            required:true
        },
        pixel_pitch:{
            type:String,
            required:true
        },
        power_consumption:{
            type:String,
            required:true
        },
        power_off_mode:{
            type:String,
            required:true
        },
        power_saving_mode:{
            type:String,
            required:true
        },
        refresh_rate:{
            type:String,
            required:true
        },
        resolution:{
            type:String,
            required:true
        },
        response_time:{
            type:String,
            required:true
        },
        video_features:{
            type:String,
            required:true
        },
        viewing_angle:{
            type:String,
            required:true
        },
        voltage:{
            type:String,
            required:true
        },
        weight:{
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
export const Monitor = model<IMonitor, monitorModel>('monitor', monitorSchema);
