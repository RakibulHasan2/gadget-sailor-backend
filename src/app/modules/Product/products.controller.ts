import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { ProductsService } from "./products.service";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { IProducts } from "./products.interface";


// Controller function to create all Products
const createProducts = catchAsync(async (req: Request, res: Response) => {
  const { ...ProductsData } = req.body;
  const result = await ProductsService.createProducts(ProductsData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Products is Created successfully',
    data: result,
  });
});


//  Controller function to retrieve all products
const getAllProducts = async (req: Request, res: Response) => {

  const result = await ProductsService.getAllproducts();

  sendResponse<IProducts[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'products retrieved successfully',
    data: result,
  });
};

//  Controller function to retrieve single products by id
const getSingleProduct = async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await ProductsService.getSingleProduct(id);

  sendResponse<IProducts>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'products retrieved successfully',
    data: result,
  });

};


// Controller function to update single products by id
const updateSingleProduct = async (req: Request, res: Response) => {
  const id = req.params.id;
  const newData=req.body;
console.log(newData)

  const result = await ProductsService.updateSingleproduct(id,newData);

  sendResponse<IProducts>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'products updated successfully',
    data: result,
  });

};


export const productsController = {
  createProducts,
  getAllProducts,
  getSingleProduct,
  updateSingleProduct
}