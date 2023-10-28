import { Request, Response } from 'express';
import sendResponse from "../../../shared/sendResponse";
import httpStatus from 'http-status';
  
  
  // Controller function to get all users
  const getAllProducts = async (req: Request, res: Response) => { 
    const result = await productsService.getAllProducts();
    sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Users retrieved successfully',
    data: result,
  });
};

export const productsController = {
    getAllProducts
}