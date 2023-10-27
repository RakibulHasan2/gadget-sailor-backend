import httpStatus from "http-status";
import catchAsync from './../../../../shared/catchAsync';
import { ProcessorService } from "./processor.service";
import { Request, Response } from 'express';
import sendResponse from './../../../../shared/sendResponse';

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

  export const processorController = {
    createProcessor
  };