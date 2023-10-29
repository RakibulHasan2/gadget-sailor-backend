import httpStatus from "http-status";

import { Request, Response } from "express";
import catchAsync from "../../../../shared/catchAsync";
import sendResponse from "../../../../shared/sendResponse";
import { Hard_diskService } from "./hard_disk.service";
import { IHard_disk } from "./hard_disk.interface";


const createHard_disk = catchAsync(async (req: Request, res: Response) => {
    const { ...hard_diskData } = req.body;
    const result = await Hard_diskService.createHard_disk(hard_diskData);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Product is Created successfully',
        data: result,
    });
});
const getAllHard_disk = async (req: Request, res: Response) => {
    const result = await Hard_diskService.getAllHard_disk();
    sendResponse<IHard_disk[]>(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'hard disk retrieved successfully',
        data: result,
    });
};

const getHard_diskById = catchAsync(async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await Hard_diskService.getHard_diskById(id);
    sendResponse<IHard_disk>(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'hard disk retrieved successfully',
        data: result,
    });
});

const updateHard_disk = catchAsync(async (req: Request, res: Response) => {
    const id = req.params.id;
    const updateData = req.body;
    const result = await Hard_diskService.updateHard_disk(id, updateData);
    sendResponse<IHard_disk>(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'hard disk updated successfully',
        data: result,
    });
});

const deleteHard_disk = catchAsync(async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await Hard_diskService.deleteHard_disk(id);
    sendResponse<IHard_disk>(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'hard disk deleted successfully',
        data: result,
    });
});

export const Hard_diskController = {
    createHard_disk,
    getAllHard_disk,
    getHard_diskById,
    updateHard_disk,
    deleteHard_disk
};