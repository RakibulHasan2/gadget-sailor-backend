import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { paymentService } from "./payment.service";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { IPayment } from "./payment.interface";

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



// retrieve all data from payment
const GetFromPaidData = async (req: Request, res: Response) => {

    const result = await paymentService.getFromPaidList();

    sendResponse<IPayment[]>(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Retrieved from payment successfully',
        data: result,
    });
};


// retrieve data from payment by email
const GetPaidDataByEmail = async (req: Request, res: Response) => {
    const Email = req.params.email;
    const result = await paymentService.getPaymentDataByEmail(Email);
    sendResponse<IPayment | IPayment[]>(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Retrieved from payment by email successfully',
        data: result,
    });

};

//process payment in stripe
const handleCreatePaymentIntent = async (req: Request, res: Response) => {
    const data = req.body;
    const price = data.total_price;
    if (isNaN(price)) {
        return res.status(400).json({ error: 'Invalid price' });
    }
    const paymentIntentResponse = await paymentService.processPayment(price);
    console.log(paymentIntentResponse)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Payment Intent successfully',
        data: paymentIntentResponse,
    });


}



// retrieve data from payment by order code
const GetPaidDataByOrderCode = async (req: Request, res: Response) => {
    const body = req.body;
    const paymentCode = Number(body.payment_code);
    console.log(paymentCode);
    const result = await paymentService.getPaymentDataByOrderCode(paymentCode);
    console.log(result);
    if (result) {
        sendResponse<IPayment | IPayment[]>(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: 'Retrieved from payment by order code successfully',
            data: result,
        });
    } else {
        sendResponse<IPayment | IPayment[]>(res, {
            statusCode: httpStatus.NOT_FOUND,
            success: false,
            message: 'Data not found',
            data: null,
        });
    }
};


export const paymentController = {
    AddToPaidData,
    GetFromPaidData,
    GetPaidDataByEmail,
    handleCreatePaymentIntent,
    GetPaidDataByOrderCode
}