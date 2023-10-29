import { Model } from 'mongoose';
import { IGlobalProducts } from '../globalProducts.interface';

export interface Ram {
 
    memory_type: string;
    capacity: string;
    speed: string;
    cas_latency: string;
    form_factor: string;
    voltage: string;
}

export type IRam = IGlobalProducts & Ram;

export type IRamModel = Model<IRam, Record<string, unknown>>;