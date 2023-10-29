import { Model } from 'mongoose';
import { IGlobalProducts } from '../globalProducts.interface';

export type SSD = {
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

export type ISSD = IGlobalProducts & SSD;

export type ISSDModel = Model<ISSD, Record<string, unknown>>;