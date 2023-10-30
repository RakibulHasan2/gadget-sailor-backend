import { Request, Response } from 'express';
import catchAsync from './../../../shared/catchAsync';
import { UsersService } from './user.service';
import sendResponse from './../../../shared/sendResponse';
import httpStatus from 'http-status';
import { IUsers } from './user.interface';

// Controller function to create all users
const createUsers = catchAsync(async (req: Request, res: Response) => {
  const { ...usersData } = req.body;
  try {
    const result = await UsersService.createUsers(usersData);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'user is Created successfully',
      data: result,
    });
  } catch (err: any) {
    if (err.name === 'MongoServerError') {

     const fieldValue = Object.keys(err.keyValue)
      err.message = `${fieldValue[0]} is already used`
      res.send(err.message);
      
    }
  }
});

// Controller function to get all users
const getAllUsers = async (req: Request, res: Response) => {
  const result = await UsersService.getAllUsers();
  sendResponse<IUsers[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Users retrieved successfully',
    data: result,
  });
};

//get user by id
const getUserById = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await UsersService.getUserById(id);
  sendResponse<IUsers>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User retrieved successfully',
    data: result,
  });
});


//update user by id
const updateUser = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const updateData = req.body;
  const result = await UsersService.UpdateUser(id, updateData);
  sendResponse<IUsers>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'user updated successfully',
    data: result,
  });
});


// delete user by id
const deleteUsers = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await UsersService.getDeleteUsers(id);
  sendResponse<IUsers>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'user deleted successfully',
    data: result,
  });
});


export const usersController = {
  createUsers,
  getAllUsers,
  deleteUsers,
  updateUser,
  getUserById
};

// 
