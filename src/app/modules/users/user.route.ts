import express from 'express';
import { usersController } from './user.controller';

const router = express.Router();

//user signup 
router.post('/auth/signup',usersController.createUsers);
router.get('/users', usersController.getAllUsers);
router.get('/users/:email', usersController.getUserByEmail);
router.delete('/users/:id', usersController.deleteUsers);

export const UserRoute = router;
