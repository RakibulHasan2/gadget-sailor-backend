import httpStatus from "http-status";
import catchAsync from "../../../../shared/catchAsync";
import { Request, Response } from "express";
import sendResponse from "../../../../shared/sendResponse";
import { LaptopService } from "./laptop.service";
import { ILaptop } from "./laptop.interface";


const createLaptop = catchAsync(async (req: Request, res: Response) => {
    const { ...laptopData } = req.body;
    const result = await LaptopService.createLaptop(laptopData);
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Product is Created successfully',
      data: result,
    });
  });

  const  getAllLaptop = async (req: Request, res: Response) => { 
    const result = await LaptopService.getAllLaptop();
    sendResponse<ILaptop[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Laptops retrieved successfully',
    data: result,
  });
  };

  const getLaptopById = catchAsync(async (req: Request, res: Response) => {
    const id  = req.params.id;
    const result = await LaptopService.getLaptopById(id);
    sendResponse<ILaptop>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Laptop  retrieved successfully',
      data: result,
    });
  });

    const updateLaptop = catchAsync(async (req: Request, res: Response) => {
      const id = req.params.id;
      const updateData = req.body;
      const result = await LaptopService.updateLaptop(id, updateData);
      sendResponse<ILaptop>(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Laptop updated successfully',
        data: result,
      });
    });

    const deleteLaptop = catchAsync(async (req: Request, res: Response) => {
      const id = req.params.id;
      const result = await LaptopService.deleteLaptop(id);
      sendResponse<ILaptop>(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Laptop deleted successfully',
        data: result,
      });
    });

  export const LaptopController = {
    createLaptop,
    getAllLaptop,
    getLaptopById,
    updateLaptop,
    deleteLaptop
  };