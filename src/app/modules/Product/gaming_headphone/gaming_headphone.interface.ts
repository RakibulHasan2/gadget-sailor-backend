import { Model } from 'mongoose';
import { IGlobalProducts } from '../globalProducts.interface';


export interface GamingHeadphone {

    headphone_type: string;
    connection_type: string;
    sound_quality: string;
    microphone: string;
    color: string;
    cable_length: string;
    rgb: string;
    features: string;
}

export type IGamingHeadphone = IGlobalProducts & GamingHeadphone;

export type GamingHeadphoneModel = Model<IGamingHeadphone, Record<string, unknown>>;