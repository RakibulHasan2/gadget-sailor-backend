import { Request, Response } from 'express';
import catchAsync from './../../../shared/catchAsync';
import { UsersService } from './user.service';
import sendResponse from './../../../shared/sendResponse';
import httpStatus from 'http-status';

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

  export const usersController = {
    createUsers
  };
  