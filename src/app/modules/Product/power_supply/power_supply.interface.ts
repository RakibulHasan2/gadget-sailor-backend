import { Model } from 'mongoose';
import { IGlobalProducts } from '../globalProducts.interface';

export interface PowerSupply {
    efficiency_rating: string;
    modularity: string;
    fan_size: string;
    protections: string;
    frequency_range: string;
    current: string;
    voltage: string;
    main_power: string;
    SATA: string;
    CPU: string;
    AC_input: string;
    DC_input: string;
}


export type IPower_supply = IGlobalProducts & PowerSupply

export type power_supplyModel = Model<IPower_supply, Record<string, unknown>>;