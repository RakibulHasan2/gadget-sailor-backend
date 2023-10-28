import express from 'express';
import { GamingPcController } from './Gaming_pc.controller';



const router = express.Router();

router.post('/add-gamingPC', GamingPcController.createGamingPc);
router.get('/all-gamingPc',GamingPcController.getAllGamingPc);

export const gamingRoute = router;