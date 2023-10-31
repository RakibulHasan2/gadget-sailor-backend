import config from "../../../config";
import { IProducts } from "./products.interface";
import { Products } from "./products.model";

// create Products function
const createProducts = async (payload: IProducts): Promise<IProducts | null | any> => {
    const min = 100000;
    const max = 999999;

    if (!payload.status) {
        payload.status = config.default_status as string;
    }

    if (!payload.product_code) {

        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        payload.product_code = randomNumber
    }

    const updateProduct = Object.keys(payload.others_info)
    let obj: object | any = { ...payload }

    for (const element of updateProduct) {
        obj[element] = obj.others_info[element];
    }

    if (obj.others_info) {
        delete obj?.others_info;
    }

    const result = await Products.create(obj);
    return result;
};


// Function to retrieve all products
const getAllProducts = async (): Promise<IProducts[]> => {
        const allProducts = await Products.find({});
        return allProducts;
};

// Function to retrieve products by id
const getSingleProduct = async (id: string): Promise<IProducts | null> => {
    const result = await Products.findById(id);
    return result;
};

// Function to update a single product
const updateSingleProduct = async (id: string, payload: Partial<IProducts>): Promise<IProducts | null> => {
    const updatedProduct = await Products.findOneAndUpdate({ _id: id }, payload, { new: true });
    return updatedProduct;
};

// delete Product by id
const DeleteProduct = async (id: string): Promise<IProducts | null> => {
    const result = await Products.findByIdAndDelete(id);
    return result;
};


export const ProductsService = {
    createProducts,
    getAllProducts,
    getSingleProduct,
    updateSingleProduct,
    DeleteProduct
}