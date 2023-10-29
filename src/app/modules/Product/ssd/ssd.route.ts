import express from 'express';
import { SSDController } from './ssd.controller';


const router = express.Router();

router.post('/add-SSD',SSDController.createSSD);
router.get('/all-SSD',SSDController.getAllSSD);
router.get('/all-SSD/:id',SSDController.getSSDById);
router.patch('/all-SSD/:id',SSDController.UpdateSSD);
router.delete('/all-SSD/:id',SSDController.getDeleteSSD);

export const SSDRoute = router;