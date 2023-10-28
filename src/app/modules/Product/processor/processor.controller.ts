import httpStatus from "http-status";
import catchAsync from './../../../../shared/catchAsync';
import { ProcessorService } from "./processor.service";
import { Request, Response } from 'express';
import sendResponse from './../../../../shared/sendResponse';
import { IProcessor } from "./processor.interface";

const createProcessor = catchAsync(async (req: Request, res: Response) => {
    const { ...processorData } = req.body;
    const result = await ProcessorService.createProcessor(processorData);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Product is Created successfully',
      data: result,
    });
  });


// Controller function to get all processor
const getAllProcessor = async (req: Request, res: Response) => { 
  const result = await ProcessorService.getAllProcessor();
  sendResponse<IProcessor[]>(res, {
  statusCode: httpStatus.OK,
  success: true,
  message: 'Users retrieved successfully',
  data: result,
});
};

  export const processorController = {
    createProcessor,
    getAllProcessor
  };