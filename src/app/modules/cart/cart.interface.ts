import { Model } from "mongoose";

export type ICart = {
    product_name: string;
    image: string;
    unit_price: number;
    total_price: number;
    quantity: number;
    model: string;
    email: string;
};

export type IcartModel = Model<ICart, Record<string, unknown>>;