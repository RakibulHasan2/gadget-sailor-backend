import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { cartService } from "./cart.service";
import { Request, Response } from "express";

// create cart
const create_Cart = catchAsync(async (req: Request, res: Response) => {
    const { ...cartData } = req.body;
    const result = await cartService.createCart(cartData);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Added to cart successfully',
        data: result,
    });
})

export const cartController = {
    create_Cart
}