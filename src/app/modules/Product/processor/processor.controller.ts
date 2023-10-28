import httpStatus from "http-status";
import catchAsync from './../../../../shared/catchAsync';
import { ProcessorService } from "./processor.service";
import { Request, Response } from 'express';
import sendResponse from './../../../../shared/sendResponse';
import { IProcessor } from "./processor.interface";

// Controller function to create all processor
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
  message: 'Processors retrieved successfully',
  data: result,
});
};


//get processor data
const getProcessorById = catchAsync(async (req: Request, res: Response) => {
  const id  = req.params.id;
  const result = await ProcessorService.getProcessorById(id);
  sendResponse<IProcessor>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Processor retrieved successfully',
    data: result,
  });
});


  //update processors by id
  const UpdateProcessor = catchAsync(async (req: Request, res: Response) => {
    const id = req.params.id;
    const updateData = req.body;
    const result = await ProcessorService.UpdateProcessor(id, updateData);
    sendResponse<IProcessor>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Processor updated successfully',
      data: result,
    });
  });


// delete processor by id
  const getDeleteProcessor = catchAsync(async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await ProcessorService.getDeleteProcessor(id);
    sendResponse<IProcessor>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Processor deleted successfully',
      data: result,
    });
  });


  export const processorController = {
    createProcessor,
    getAllProcessor,
    getDeleteProcessor,
    UpdateProcessor,
    getProcessorById
  };