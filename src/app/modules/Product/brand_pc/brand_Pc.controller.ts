import httpStatus from "http-status";
import { Request, Response } from "express";
import catchAsync from "../../../../shared/catchAsync";
import { Brand_pcService } from "./brand_Pc.service";
import sendResponse from "../../../../shared/sendResponse";
import { IBrand_pc } from "./brand_Pc.interface";



const createBrand_pc = catchAsync(async (req: Request, res: Response) => {
    const { ...brand_pc } = req.body;
    const result = await Brand_pcService.createBrand_pc(brand_pc);
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Product is Created successfully',
      data: result,
    });
  });
  const  getAllBrand_pc = async (req: Request, res: Response) => { 
    const result = await Brand_pcService.getAllBrand_pc();
    sendResponse<IBrand_pc[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'brand pc retrieved successfully',
    data: result,
  });
  };

  const getBrand_pcById = catchAsync(async (req: Request, res: Response) => {
    const id  = req.params.id;
    const result = await Brand_pcService.getBrand_pcById(id);
    sendResponse<IBrand_pc>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'single brand retrieved successfully',
      data: result,
    });
  });

    const updateBrand_pc = catchAsync(async (req: Request, res: Response) => {
      const id = req.params.id;
      const updateData = req.body;
      const result = await Brand_pcService.updateBrand_pc(id, updateData);
      sendResponse<IBrand_pc>(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'brand pc updated successfully',
        data: result,
      });
    });

    const deleteBrand_pc = catchAsync(async (req: Request, res: Response) => {
      const id = req.params.id;
      const result = await Brand_pcService.deleteBrand_pc(id);
      sendResponse<IBrand_pc>(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'brand pc deleted successfully',
        data: result,
      });
    });

  export const Brand_pcController = {
     createBrand_pc,
     getAllBrand_pc,
     getBrand_pcById,
     deleteBrand_pc,
     updateBrand_pc
 
  };