import { Request, Response } from 'express';
import catchAsync from './../../../shared/catchAsync';
import { UsersService } from './user.service';
import sendResponse from './../../../shared/sendResponse';
import httpStatus from 'http-status';
import { IUsers } from './user.interface';

 // Controller function to create all users
const createUsers = catchAsync(async (req: Request, res: Response) => {
    const { ...usersData } = req.body;
    const result = await UsersService.createUsers(usersData);
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'user is Created successfully',
      data: result,
    });
  });

  // Controller function to get all users
const getAllUsers = async (req: Request, res: Response) => {

    // Call the getAllUsers function to retrieve all users
    const result = await UsersService.getAllUsers();
   
    // Send the users as a JSON response
    sendResponse<IUsers[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Users retrieved successfully',
    data: result,
  });
};

  export const usersController = {
    createUsers,
    getAllUsers 
  };
  