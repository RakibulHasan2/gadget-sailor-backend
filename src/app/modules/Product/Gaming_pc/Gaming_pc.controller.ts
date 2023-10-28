import httpStatus from "http-status";
import { Request, Response } from "express";
import catchAsync from "../../../../shared/catchAsync";
import { GaminPcService } from "./Gaming_pc.service";
import sendResponse from "../../../../shared/sendResponse";
import { IGamingPc } from "./Gamin_pc.interface";


const createGamingPc = catchAsync(async (req: Request, res: Response) => {
    const { ...gamingPcData } = req.body;
    const result = await GaminPcService.createGamingPc(gamingPcData);
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Product is Created successfully',
      data: result,
    });
  });
  const  getAllGamingPc = async (req: Request, res: Response) => { 
    const result = await GaminPcService.getAllGamingPc();
    sendResponse<IGamingPc[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'gaming pc retrieved successfully',
    data: result,
  });
  };
  export const GamingPcController = {
    createGamingPc,
    getAllGamingPc
  };