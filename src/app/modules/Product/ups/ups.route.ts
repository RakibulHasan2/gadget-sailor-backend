import express from 'express';
import { UPSController } from './ups.controller';

const router = express.Router();

router.post('/add-UPS',UPSController.createUPS);
router.get('/all-UPS',UPSController.getAllUPS);
router.get('/all-UPS/:id',UPSController.getUPSById);
router.patch('/all-UPS/:id',UPSController.UpdateUPS);
router.delete('/all-UPS/:id',UPSController.getDeleteUPS);

export const UPSRoute = router;