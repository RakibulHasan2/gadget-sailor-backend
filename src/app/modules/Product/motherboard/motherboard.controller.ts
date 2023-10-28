import httpStatus from "http-status";
import catchAsync from './../../../../shared/catchAsync';
import { Request, Response } from 'express';
import sendResponse from './../../../../shared/sendResponse';
import { MotherboardService } from "./motherboard.service";
import { IMotherboard } from "./motherboard.interface";


// Controller function to create all motherboards
const createMotherboard = catchAsync(async (req: Request, res: Response) => {
    const { ...MotherboardData } = req.body;
    const result = await MotherboardService.createMotherboard(MotherboardData);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Product is Created successfully',
      data: result,
    });
  });


// Controller function to get all Motherboard
const getAllMotherboard = async (req: Request, res: Response) => { 
  const result = await MotherboardService.getAllMotherboard();
  sendResponse<IMotherboard[]>(res, {
  statusCode: httpStatus.OK,
  success: true,
  message: 'Motherboards retrieved successfully',
  data: result,
});
};


//get Motherboard data
const getMotherboardById = catchAsync(async (req: Request, res: Response) => {
  const id  = req.params.id;
  const result = await MotherboardService.getMotherboardById(id);
  sendResponse<IMotherboard>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Motherboard retrieved successfully',
    data: result,
  });
});


  //update Motherboards by id
  const UpdateMotherboard = catchAsync(async (req: Request, res: Response) => {
    const id = req.params.id;
    const updateData = req.body;
    const result = await MotherboardService.UpdateMotherboard(id, updateData);
    sendResponse<IMotherboard>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Motherboard updated successfully',
      data: result,
    });
  });


// delete Motherboard by id
  const getDeleteMotherboard = catchAsync(async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await MotherboardService.getDeleteMotherboard(id);
    sendResponse<IMotherboard>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Motherboard deleted successfully',
      data: result,
    });
  });


  export const MotherboardController = {
    createMotherboard,
    getAllMotherboard,
    getDeleteMotherboard,
    UpdateMotherboard,
    getMotherboardById
  };