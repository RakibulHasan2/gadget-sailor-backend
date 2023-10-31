import express from 'express';
import { usersController } from './user.controller';
import validateRequest from '../../middleware/validateRequest';
import { UserValidation } from './usersValidation';

const router = express.Router();

//user signup 
router.post('/auth/signup',validateRequest(UserValidation.createUserZodSchema),usersController.createUsers);
router.get('/users', usersController.getAllUsers);
router.get('/users/:id', usersController.getUserById);
router.patch('/users/:id', usersController.updateUser);
router.delete('/users/:id', usersController.deleteUsers);

export const UserRoute = router;
