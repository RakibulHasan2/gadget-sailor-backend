import httpStatus from "http-status";
import catchAsync from './../../../../shared/catchAsync';
import { Request, Response } from 'express';
import sendResponse from './../../../../shared/sendResponse';
import { IGraphics_card } from "./graphics_card.interface";
import { Graphics_CardService } from "./graphics_card.service";



// Controller function to create all Graphics_Cards
const createGraphics_Card = catchAsync(async (req: Request, res: Response) => {
    const { ...Graphics_CardData } = req.body;
    const result = await Graphics_CardService.createGraphics_Card(Graphics_CardData);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Product is Created successfully',
      data: result,
    });
  });


// Controller function to get all Graphics_Card
const getAllGraphics_Card = async (req: Request, res: Response) => { 
  const result = await Graphics_CardService.getAllGraphics_Card();
  sendResponse<IGraphics_card[]>(res, {
  statusCode: httpStatus.OK,
  success: true,
  message: 'Graphics_Cards retrieved successfully',
  data: result,
});
};


//get Graphics_Card data
const getGraphics_CardById = catchAsync(async (req: Request, res: Response) => {
  const id  = req.params.id;
  const result = await Graphics_CardService.getGraphics_CardById(id);
  sendResponse<IGraphics_card>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Graphics_Card retrieved successfully',
    data: result,
  });
});


  //update Graphics_Cards by id
  const UpdateGraphics_Card = catchAsync(async (req: Request, res: Response) => {
    const id = req.params.id;
    const updateData = req.body;
    const result = await Graphics_CardService.UpdateGraphics_Card(id, updateData);
    sendResponse<IGraphics_card>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Graphics_Card updated successfully',
      data: result,
    });
  });


// delete Graphics_Card by id
  const getDeleteGraphics_Card = catchAsync(async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await Graphics_CardService.getDeleteGraphics_Card(id);
    sendResponse<IGraphics_card>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Graphics_Card deleted successfully',
      data: result,
    });
  });


  export const Graphics_CardController = {
    createGraphics_Card,
    getAllGraphics_Card,
    getDeleteGraphics_Card,
    UpdateGraphics_Card,
    getGraphics_CardById
  };