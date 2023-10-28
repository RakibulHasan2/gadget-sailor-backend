import httpStatus from "http-status";
import catchAsync from "../../../../shared/catchAsync";
import { ImacService } from "./imac.service";
import { Request, Response } from "express";
import sendResponse from "../../../../shared/sendResponse";
import { IImac } from "./imac.interface";

const createImac = catchAsync(async (req: Request, res: Response) => {
    const { ...imacData } = req.body;
    const result = await ImacService.createImac(imacData);
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Product is Created successfully',
      data: result,
    });
  });
  const  getAllImacs = async (req: Request, res: Response) => { 
    const result = await ImacService.getAllImacs();
    sendResponse<IImac[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'imacs retrieved successfully',
    data: result,
  });
  };
  export const ImacController = {
    createImac,
    getAllImacs
  };