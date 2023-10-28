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

  const getImacById = catchAsync(async (req: Request, res: Response) => {
    const id  = req.params.id;
    const result = await ImacService.getImacById(id);
    sendResponse<IImac>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'imac  retrieved successfully',
      data: result,
    });
  });

    const updateImac = catchAsync(async (req: Request, res: Response) => {
      const id = req.params.id;
      const updateData = req.body;
      const result = await ImacService.updateImac(id, updateData);
      sendResponse<IImac>(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'imac updated successfully',
        data: result,
      });
    });

    const deleteImac = catchAsync(async (req: Request, res: Response) => {
      const id = req.params.id;
      const result = await ImacService.deleteImac(id);
      sendResponse<IImac>(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'imac deleted successfully',
        data: result,
      });
    });

  export const ImacController = {
    createImac,
    getAllImacs,
    getImacById,
    updateImac,
    deleteImac
  };