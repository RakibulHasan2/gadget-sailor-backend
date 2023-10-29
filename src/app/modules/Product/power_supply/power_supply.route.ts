import express from 'express';
import { Power_supplyController } from './power_supply.controller';




const router = express.Router();

router.post('/add-power_supply',Power_supplyController.createPower_supply);
router.get('/all-power_supply',Power_supplyController.getAllPower_supply);
router.get('/power_supply/:id',Power_supplyController.getPower_supplyById);
router.patch('/power_supply/:id', Power_supplyController.updatePower_supply);
router.delete('/power_supply/:id', Power_supplyController.deletePower_supply);

export const power_supplyRoute = router;
