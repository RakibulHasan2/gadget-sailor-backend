import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { BuildPCService } from "./build_pc.service";
import httpStatus from "http-status";
import { IBuild_PC } from "./build_pc.interface";

const createBuildPC = catchAsync(async (req: Request, res: Response) => {
  const { ...categoryData } = req.body;
  const result = await BuildPCService.createBuildPC(categoryData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'category is Created successfully',
    data: result,
  });
});

const getAllBuildPC = async (req: Request, res: Response) => {

  // Call the getAllBuildPC function to retrieve all users
  const result = await BuildPCService.getAllBuildPC();

  // Send the BuildPC as a JSON response
  sendResponse<IBuild_PC[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'category retrieved successfully',
    data: result,
  });
};

//controller for get category by id (updated by marzia)
const  getSingleBuildPC = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await BuildPCService.getSingleBuildPC(id);
  sendResponse<IBuild_PC>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'category retrieved successfully',
    data: result,
  });
});

export const BuildPCController = {
  createBuildPC,
  getAllBuildPC,
  getSingleBuildPC
};