import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { ProductsService } from "./Product.service";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";

const createProduct = catchAsync(async (req: Request, res: Response) => {
    const { ...productData } = req.body;
    const result = await ProductsService.createProduct(productData);
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Product is Created successfully',
      data: result,
    });
  });

  export const productsController = {
    createProduct
  };
  