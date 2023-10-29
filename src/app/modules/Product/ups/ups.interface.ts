import { Model } from 'mongoose';
import { IGlobalProducts } from '../globalProducts.interface';

export type UPS = {
    capacity: string;
    input_voltage: string;
    output_voltage: string;
    frequency: string;
    noise_level: string;
    batteryBackup_time: string;
    color: string;
    weight: string;
    dimensions: string;
}

export type IUPS = IGlobalProducts & UPS;

export type IUPSModel = Model<IUPS, Record<string, unknown>>;