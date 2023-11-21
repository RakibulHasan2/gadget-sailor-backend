import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { favService } from "./favourites.service";
import { Request, Response } from "express";
import { IFav } from "./favourites.interface";

//create all Products
const AddToFav = catchAsync(async (req: Request, res: Response) => {
    const { ...favData } = req.body;
    const result = await favService.addToFav(favData);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Added to favourite successfully',
        data: result,
    });
});

// retrieve all data from favourite
const GetFromFav = async (req: Request, res: Response) => {

    const result = await favService.getFromFav();

    sendResponse<IFav[]>(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Retrieved from favourite successfully',
        data: result,
    });
};



export const favController = {
    AddToFav,
    GetFromFav
}