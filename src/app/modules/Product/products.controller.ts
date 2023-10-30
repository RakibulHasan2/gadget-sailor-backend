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


//  getAllProducts function to retrieve all products
const getAllProducts = async (req: Request, res: Response) => {


  const result = await ProductsService.getAllproducts();


  sendResponse<IProducts[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'products retrieved successfully',
    data: result,
  });
};


export const productsController = {
  createProducts,
  getAllProducts
}