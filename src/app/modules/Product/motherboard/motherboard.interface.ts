import { Model } from 'mongoose';
import { IGlobalProducts } from '../globalProducts.interface';

export type Motherboard = {
    supported_cpu: string;
    chip_set: string;
    BIOS: string;
    form_factor: string;
    PCI: string;
    Slots: string;
    supported_memory: string;
    ram_type: string;
    maximum_mem: string;
    max_channels: string;
}

export type IMotherboard = IGlobalProducts & Motherboard;

export type IMotherboardModel = Model<IMotherboard, Record<string, unknown>>;