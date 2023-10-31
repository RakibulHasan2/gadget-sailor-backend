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
const getAllproducts = async (): Promise<IProducts[]> => {
    try {
        const allProducts = await Products.find({});
        return allProducts;
    } catch (error) {
        console.error('Error getting all products:', error);
        throw error;
    }
};

// Function to retrieve products by id
const getSingleProduct = async (id: string): Promise<IProducts | null> => {
    const result = await Products.findById(id);
    return result;
};

// Function to update a single product
const updateSingleproduct = async (id: string,payload: Partial<IProducts>): Promise<IProducts[]> => {
    try {
        const updatedProduct = await Products.findOneAndUpdate({_id:id}, payload,{new: true});
        return updatedProduct;
    } catch (error) {
        console.error('Error in updating the product:', error);
        throw error;
    }
};

export const ProductsService = {
    createProducts,
    getAllproducts,
    getSingleProduct,
    updateSingleproduct

}