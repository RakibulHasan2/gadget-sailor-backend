import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { favService } from "./favourites.service";
import { Request, Response } from "express";

//create all Products
const AddToFav = catchAsync(async (req: Request, res: Response) => {
    const { ...favData } = req.body;
    const result = await favService.addToFav(favData);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Products is Created successfully',
        data: result,
    });
});

export const favController = {
    AddToFav,
}