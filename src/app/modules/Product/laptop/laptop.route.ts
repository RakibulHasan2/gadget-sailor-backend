import express from 'express';
import { LaptopController } from './laptop.controller';



const router = express.Router();

router.post('/add-laptop',LaptopController.createLaptop);
router.get('/all-laptop',LaptopController.getAllLaptop);
router.get('/laptop/:id',LaptopController.getLaptopById);
router.patch('/laptop/:id', LaptopController.updateLaptop);
router.delete('/laptop/:id', LaptopController.deleteLaptop);

export const laptopRoute = router;
