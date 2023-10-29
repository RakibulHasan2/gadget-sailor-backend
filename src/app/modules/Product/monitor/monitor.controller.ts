import httpStatus from "http-status";

import { Request, Response } from "express";
import catchAsync from "../../../../shared/catchAsync";
import { MonitorService } from "./monitor.service";
import sendResponse from "../../../../shared/sendResponse";
import { IMonitor } from "./monitor.interface";


const createMonitor = catchAsync(async (req: Request, res: Response) => {
    const { ...monitorData } = req.body;
    const result = await MonitorService.createMonitor(monitorData);
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Product is Created successfully',
      data: result,
    });
  });

  const  getAllMonitor = async (req: Request, res: Response) => { 
    const result = await MonitorService.getAllMonitor();
    sendResponse<IMonitor[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Monitor retrieved successfully',
    data: result,
  });
  };

  const getMonitorById = catchAsync(async (req: Request, res: Response) => {
    const id  = req.params.id;
    const result = await MonitorService.getMonitorById(id);
    sendResponse<IMonitor>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'monitor retrieved successfully',
      data: result,
    });
  });

    const updateMonitor = catchAsync(async (req: Request, res: Response) => {
      const id = req.params.id;
      const updateData = req.body;
      const result = await MonitorService.updateMonitor(id, updateData);
      sendResponse<IMonitor>(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'monitor updated successfully',
        data: result,
      });
    });

    const deleteMonitor = catchAsync(async (req: Request, res: Response) => {
      const id = req.params.id;
      const result = await MonitorService.deleteMonitor(id);
      sendResponse<IMonitor>(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'monitor deleted successfully',
        data: result,
      });
    });

  export const MonitorController = {
   createMonitor,
   getAllMonitor, 
   getMonitorById,
   deleteMonitor,
   updateMonitor
 
  };