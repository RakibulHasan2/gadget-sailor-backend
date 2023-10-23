import express from 'express';
import { usersController } from './user.controller';

const router = express.Router();

//user signup 
router.post('/auth/signup',usersController.createUsers);

export const UserRoute = router;
