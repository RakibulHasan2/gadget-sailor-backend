import { Model } from 'mongoose';
import { IGlobalProducts } from '../globalProducts.interface';



export interface Monitor {

    display_size: string;
    resolution: string;
    refresh_rate: string;
    response_time: string;
    panel_type: string;
    features: string;
    connectivity: string;
    color: string;
    weight: string;
    dimensions: string;
    display_type: string;
    pixel_pitch: string;
    display_surface: string;
    aspect_ratio: string;
    viewing_angle: string;
    brightness: string;
    contrast_ratio: string;
    color_support: string;
    color_gamut: string;
    hdr: string;
    video_features: string;
    g_sync_support: string;
    free_sync_support: string;
    hdcp: string;
    audio_features: string;
    power_consumption: string;
    power_saving_mode: string;
    power_off_mode: string;
    voltage: string;
}

export type IMonitor = IGlobalProducts & Monitor

export type monitorModel = Model<IMonitor, Record<string, unknown>>;