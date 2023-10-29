import { Model } from 'mongoose';
import { IGlobalProducts } from '../globalProducts.interface';

export type SSD = {
    capacity: string;
    interface: string;
    flash_type: string;
    read_speed: string;
    write_speed: string;
    MTBF: string;
    dimension: string;
    weight: string;
    dimensions: string;
    operating_temperature: string;
    storage_temperature: String;
    form_factor: String;
}

export type ISSD = IGlobalProducts & SSD;

export type ISSDModel = Model<ISSD, Record<string, unknown>>;