import httpStatus from "http-status";
import { Request, Response } from "express";
import catchAsync from "../../../../shared/catchAsync";
import sendResponse from "../../../../shared/sendResponse";
import { IGamingPc } from "./Gamin_pc.interface";
import { GamingPcService } from "./Gaming_pc.service";


const createGamingPc = catchAsync(async (req: Request, res: Response) => {
    const { ...gamingPcData } = req.body;
    const result = await GamingPcService.createGamingPc(gamingPcData);
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Product is Created successfully',
      data: result,
    });
  });
  const  getAllGamingPc = async (req: Request, res: Response) => { 
    const result = await GamingPcService.getAllGamingPc();
    sendResponse<IGamingPc[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'gaming pc retrieved successfully',
    data: result,
  });
  };

  const getGamingPcById = catchAsync(async (req: Request, res: Response) => {
    const id  = req.params.id;
    const result = await GamingPcService.getGamingPcById(id);
    sendResponse<IGamingPc>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'gaming pc retrieved successfully',
      data: result,
    });
  });

    const updateGamingPc = catchAsync(async (req: Request, res: Response) => {
      const id = req.params.id;
      const updateData = req.body;
      const result = await GamingPcService.updateGamingPc(id, updateData);
      sendResponse<IGamingPc>(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'gaming pc updated successfully',
        data: result,
      });
    });

    const getDeleteGamingcPc = catchAsync(async (req: Request, res: Response) => {
      const id = req.params.id;
      const result = await GamingPcService.getDeleteGamingcPc(id);
      sendResponse<IGamingPc>(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'gaming pc deleted successfully',
        data: result,
      });
    });

  export const GamingPcController = {
    createGamingPc,
    getAllGamingPc,
    getGamingPcById,
    getDeleteGamingcPc,
    updateGamingPc
  };