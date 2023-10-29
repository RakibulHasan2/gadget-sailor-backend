import httpStatus from "http-status";

import { Request, Response } from "express";
import catchAsync from "../../../../shared/catchAsync";
import sendResponse from "../../../../shared/sendResponse";
import { RamService } from "./Ram.service";
import { IRam } from "./Ram.interface";




const createRam = catchAsync(async (req: Request, res: Response) => {
    const { ...ramData} = req.body;
    const result = await RamService.createRam(ramData);
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'RAM is Created successfully',
      data: result,
    });
  });

  const  getAllRam = async (req: Request, res: Response) => { 
    const result = await RamService.getAllRam();
    sendResponse<IRam[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'RAM retrieved successfully',
    data: result,
  });
  };

  const getRamById = catchAsync(async (req: Request, res: Response) => {
    const id  = req.params.id;
    const result = await RamService.getRamById(id);
    sendResponse<IRam>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Ram retrieved successfully',
      data: result,
    });
  });

    const updateRam = catchAsync(async (req: Request, res: Response) => {
      const id = req.params.id;
      const updateData = req.body;
      const result = await RamService.UpdateRam(id, updateData);
      sendResponse<IRam>(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'RAM updated successfully',
        data: result,
      });
    });

    const deleteRam = catchAsync(async (req: Request, res: Response) => {
      const id = req.params.id;
      const result = await RamService.deleteRam(id);
      sendResponse<IRam>(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Ram deleted successfully',
        data: result,
      });
    });

  export const RamController = {
  createRam,
  getAllRam,
  getRamById,
  updateRam,
  deleteRam
 
  };