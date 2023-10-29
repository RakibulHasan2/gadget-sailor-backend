import { Model } from 'mongoose';
import { IGlobalProducts } from '../globalProducts.interface';

export type Graphics_Card = {
    memory_size: string;
    base_speed: string;
    chip_set: string;
    memory_bus: string;
    core_clock: string;
    ray_tracing_cores: string;
    ray_tracing_performance: string;
    boost: string;
    memory_clock: string;
    output: string;
    size: string;
    Cuda_Cores: string;
    D_port: string;
    hdmi: string;
    connectors: string;
    psu: string;
    directX: string;
    openGL: string;
    dimension: string
}

export type IGraphics_card = IGlobalProducts & Graphics_Card;

export type IGraphics_CardModel = Model<IGraphics_card, Record<string, unknown>>;