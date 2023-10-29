import httpStatus from "http-status";

import { Request, Response } from "express";
import catchAsync from "../../../../shared/catchAsync";
import { GamingHeadphoneService } from "./gaming_headphone.service";
import sendResponse from "../../../../shared/sendResponse";
import { IGamingHeadphone } from "./gaming_headphone.interface";





const createGamingHeadphone = catchAsync(async (req: Request, res: Response) => {
    const { ...gamingHeadphoneData} = req.body;
    const result = await GamingHeadphoneService.createGamingHeadphone(gamingHeadphoneData);
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Gaming Headphone is Created successfully',
      data: result,
    });
  });

  const  getAllGamingHeadphone = async (req: Request, res: Response) => { 
    const result = await GamingHeadphoneService.getAllGamingHeadphone();
    sendResponse<IGamingHeadphone[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Gaming Headphon retrieved successfully',
    data: result,
  });
  };

  const getGamingHeadphonById = catchAsync(async (req: Request, res: Response) => {
    const id  = req.params.id;
    const result = await GamingHeadphoneService.getGamingHeadphoneById(id);
    sendResponse<IGamingHeadphone>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'GamingHeadphon retrieved successfully',
      data: result,
    });
  });

    const UpdateGamingHeadphone = catchAsync(async (req: Request, res: Response) => {
      const id = req.params.id;
      const updateData = req.body;
      const result = await GamingHeadphoneService.UpdateGamingHeadphone(id, updateData);
      sendResponse<IGamingHeadphone>(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'GamingHeadphon updated successfully',
        data: result,
      });
    });

    const deleteGamingHeadphone = catchAsync(async (req: Request, res: Response) => {
      const id = req.params.id;
      const result = await GamingHeadphoneService.deleteGamingHeadphone(id);
      sendResponse<IGamingHeadphone>(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'GamingHeadphon deleted successfully',
        data: result,
      });
    });

  export const GamingHeadphoneController = {
    createGamingHeadphone,
    getAllGamingHeadphone,
    getGamingHeadphonById,
    UpdateGamingHeadphone,
    deleteGamingHeadphone
 
  };