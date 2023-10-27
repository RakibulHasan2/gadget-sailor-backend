import { Model } from 'mongoose';
import { IGlobalProducts } from '../globalProducts.interface';

export type Processor = {
    base_speed: string;
    max_speed: string;
    default_tdp: string;
    l2_cache: string;
    l3_cache: string;
    cores: string;
    threads: string;
    ram_type: string;
    maximum_speed: string;
    max_channels: string;
}

export type IProcessor = IGlobalProducts & Processor;

export type IProcessorModel = Model<IProcessor, Record<string, unknown>>;