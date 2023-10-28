import express from 'express';
import { GamingPcController } from './Gaming_pc.controller';



const router = express.Router();

router.post('/add-gamingPC', GamingPcController.createGamingPc);
router.get('/all-gamingPc',GamingPcController.getAllGamingPc);
router.get('/gamingPC/:id', GamingPcController.getGamingPcById);
router.patch('/gamingPC/:id', GamingPcController.updateGamingPc);
router.delete('/gamingPC/:id', GamingPcController.getDeleteGamingcPc);

export const gamingRoute = router;