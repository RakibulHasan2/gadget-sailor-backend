import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { cartService } from "./cart.service";
import { Request, Response } from "express";
import { ICart } from "./cart.interface";

// create cart
const create_Cart = catchAsync(async (req: Request, res: Response) => {
    const { ...cartData } = req.body;
    const result = await cartService.createCart(cartData);
    console.log(cartData)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Added to cart successfully',
        data: result,
    });
})


// retrieve data from cart

const getCartData = async (req: Request, res: Response) => {

    const result = await cartService.getFromCart();

    sendResponse<ICart[]>(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'cart data retrieved successfully',
        data: result,
    });
};

// retrieve data from cart by email
const getCartByEmail = async (req: Request, res: Response) => {
    const Email = req.params.email;
    console.log(Email)
    const result = await cartService.getCartDataByEmail(Email);
    console.log(result)
    sendResponse<ICart | ICart[]>(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'cart data retrieved by email successfully',
        data: result,
    });

};

// delete Cart by id
const DeleteCart = catchAsync(async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await cartService.DeleteCart(id);
    sendResponse<ICart>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Cart deleted successfully',
      data: result,
    });
  });
  


export const cartController = {
    create_Cart,
    getCartData,
    getCartByEmail,
    DeleteCart
}