import httpStatus from "http-status";
import catchAsync from './../../../../shared/catchAsync';
import { Request, Response } from 'express';
import sendResponse from './../../../../shared/sendResponse';
import { ISSD } from "./ssd.interface";
import { SSDService } from "./ssd.service";


// Controller function to create all SSD
const createSSD = catchAsync(async (req: Request, res: Response) => {
    const { ...SSDData } = req.body;
    const result = await SSDService.createSSD(SSDData);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'SSD is Created successfully',
      data: result,
    });
  });


// Controller function to get all SSD
const getAllSSD = async (req: Request, res: Response) => { 
  const result = await SSDService.getAllSSD();
  sendResponse<ISSD[]>(res, {
  statusCode: httpStatus.OK,
  success: true,
  message: 'SSD retrieved successfully',
  data: result,
});
};


//get SSD data
const getSSDById = catchAsync(async (req: Request, res: Response) => {
  const id  = req.params.id;
  const result = await SSDService.getSSDById(id);
  sendResponse<ISSD>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'SSD retrieved successfully',
    data: result,
  });
});


  //update SSDs by id
  const UpdateSSD = catchAsync(async (req: Request, res: Response) => {
    const id = req.params.id;
    const updateData = req.body;
    const result = await SSDService.UpdateSSD(id, updateData);
    sendResponse<ISSD>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'SSD updated successfully',
      data: result,
    });
  });


// delete SSD by id
  const getDeleteSSD = catchAsync(async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await SSDService.getDeleteSSD(id);
    sendResponse<ISSD>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'SSD deleted successfully',
      data: result,
    });
  });


  export const SSDController = {
    createSSD,
    getAllSSD,
    getDeleteSSD,
    UpdateSSD,
    getSSDById
  };