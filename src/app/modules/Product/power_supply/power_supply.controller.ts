import httpStatus from "http-status";

import { Request, Response } from "express";
import catchAsync from "../../../../shared/catchAsync";
import { Power_supply } from "./power_supply.model";
import { Power_supplyService } from "./power_supply.service";
import sendResponse from "../../../../shared/sendResponse";
import { IPower_supply } from "./power_supply.interface";


const createPower_supply = catchAsync(async (req: Request, res: Response) => {
    const { ...power_supplyData } = req.body;
    const result = await Power_supplyService.createPower_supply(power_supplyData);
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Product is Created successfully',
      data: result,
    });
  });

  const  getAllPower_supply = async (req: Request, res: Response) => { 
    const result = await Power_supplyService.getAllPower_supply();
    sendResponse<IPower_supply[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Power_supply retrieved successfully',
    data: result,
  });
  };

  const getPower_supplyById = catchAsync(async (req: Request, res: Response) => {
    const id  = req.params.id;
    const result = await Power_supplyService.getPower_supplyById(id);
    sendResponse<IPower_supply>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Power_supply retrieved successfully',
      data: result,
    });
  });

    const updatePower_supply = catchAsync(async (req: Request, res: Response) => {
      const id = req.params.id;
      const updateData = req.body;
      const result = await Power_supplyService.updatePower_supply(id, updateData);
      sendResponse<IPower_supply>(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Power_supply updated successfully',
        data: result,
      });
    });

    const deletePower_supply = catchAsync(async (req: Request, res: Response) => {
      const id = req.params.id;
      const result = await Power_supplyService.deletePower_supply(id);
      sendResponse<IPower_supply>(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Power_supply deleted successfully',
        data: result,
      });
    });

  export const Power_supplyController = {
    createPower_supply,
    getAllPower_supply,
    getPower_supplyById,
    updatePower_supply,
    deletePower_supply
 
  };