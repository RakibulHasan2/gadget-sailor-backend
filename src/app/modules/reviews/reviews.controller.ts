import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { ReviewsService } from "./reviews.service";
import httpStatus from "http-status";
import { IReviews } from "./reviews.interface";

const createReviews = catchAsync(async (req: Request, res: Response) => {
  const { ...reviewData } = req.body;
  const result = await ReviewsService.createReviews(reviewData);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Reviews is Created successfully',
    data: result,
  });
});

const getAllReviews = async (req: Request, res: Response) => {

  // Call the getAllReviews function to retrieve all users
  const result = await ReviewsService.getAllReviews();

  // Send the Reviews as a JSON response
  sendResponse<IReviews[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Reviews retrieved successfully',
    data: result,
  });
};


export const ReviewsController = {
  createReviews,
  getAllReviews,
};