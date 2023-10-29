import { Model } from 'mongoose';
import { IGlobalProducts } from '../globalProducts.interface';


export type Hard_disk = {
    capacity: string;
    rotation_speed: string;
    interface: string;
    cache: string;
    form_factor: string;
}

export type IHard_disk = IGlobalProducts & Hard_disk

export type hard_diskModel = Model<IHard_disk, Record<string, unknown>>;