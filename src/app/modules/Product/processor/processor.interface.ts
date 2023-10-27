import { Model } from 'mongoose';

export type IProcessor = {
    //common components for all data
    categoryName: string;
    sub_categoryName: string;
    brand_name: string;
    product_name: string;
    image: string,
    model: string;
    description: string;
    price: number;
    product_code: number
    status: string;
    reviews: string[];
    warranty: string;
    //interface for processors
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

export type IProcessorModel = Model<IProcessor, Record<string, unknown>>;