import { Model } from 'mongoose';
import { IGlobalProducts } from '../globalProducts.interface';


export interface Laptop {

    processor: string;
    memory: string;
    storage: string;
    display: string;
    Generation: string;
    total_ram_slot: string;
    max_ram_capacity: string;
    graphics: string;
    webCam: string;
    audio_features: string;
    operating_system: string;
    battery_type: string;
    battery_capacity: string;
    speaker: string;
    microphone:string;
    Lan:string;
    wifi:string;
    Bluetooth:string;
    adapter_type:string;
    weight:string;
    HDMI_Port:string;
    USB_2_port:string;
    USB_3_port:string;
    USB_type_C:string;
    head_micro_port:string;
}


export type ILaptop = IGlobalProducts & Laptop

export type LaptopModel = Model<ILaptop, Record<string, unknown>>;