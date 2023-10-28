import express from 'express';
import { MotherboardController } from './motherboard.controller';


const router = express.Router();

router.post('/add-motherboard',MotherboardController.createMotherboard);
router.get('/all-motherboard',MotherboardController.getAllMotherboard);
router.get('/all-motherboard/:id',MotherboardController.getMotherboardById);
router.patch('/all-motherboard/:id',MotherboardController.UpdateMotherboard);
router.delete('/all-motherboard/:id',MotherboardController.getDeleteMotherboard);

export const MotherboardRoute = router;