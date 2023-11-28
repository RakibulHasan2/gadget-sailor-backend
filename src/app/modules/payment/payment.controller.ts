import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { paymentService } from "./payment.service";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";

//create payment data
const AddToPaidData = catchAsync(async (req: Request, res: Response) => {
    const { ...paymentData } = req.body;
    const result = await paymentService.addToPaidList(paymentData);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Payment done successfully',
        data: result,
    });
});


export const paymentController = {
    AddToPaidData,
}