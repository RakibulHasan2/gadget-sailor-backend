import httpStatus from "http-status";
import catchAsync from './../../../../shared/catchAsync';
import { Request, Response } from 'express';
import sendResponse from './../../../../shared/sendResponse';
import { IUPS } from "./ups.interface";
import { UPSService } from "./ups.service";


// Controller function to create all UPS
const createUPS = catchAsync(async (req: Request, res: Response) => {
    const { ...UPSData } = req.body;
    const result = await UPSService.createUPS(UPSData);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'UPS is Created successfully',
      data: result,
    });
  });


// Controller function to get all UPS
const getAllUPS = async (req: Request, res: Response) => { 
  const result = await UPSService.getAllUPS();
  sendResponse<IUPS[]>(res, {
  statusCode: httpStatus.OK,
  success: true,
  message: 'UPSs retrieved successfully',
  data: result,
});
};


//get UPS data
const getUPSById = catchAsync(async (req: Request, res: Response) => {
  const id  = req.params.id;
  const result = await UPSService.getUPSById(id);
  sendResponse<IUPS>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'UPS retrieved successfully',
    data: result,
  });
});


  //update UPSs by id
  const UpdateUPS = catchAsync(async (req: Request, res: Response) => {
    const id = req.params.id;
    const updateData = req.body;
    const result = await UPSService.UpdateUPS(id, updateData);
    sendResponse<IUPS>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'UPS updated successfully',
      data: result,
    });
  });


// delete UPS by id
  const getDeleteUPS = catchAsync(async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await UPSService.getDeleteUPS(id);
    sendResponse<IUPS>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'UPS deleted successfully',
      data: result,
    });
  });


  export const UPSController = {
    createUPS,
    getAllUPS,
    getDeleteUPS,
    UpdateUPS,
    getUPSById
  };