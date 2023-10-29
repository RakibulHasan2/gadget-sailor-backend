import express from 'express';
import { GamingHeadphoneController } from './gaming_headphone.controller';





const router = express.Router();

router.post('/add-gamingHeadphone',GamingHeadphoneController.createGamingHeadphone);
router.get('/all-gamingHeadphone',GamingHeadphoneController.getAllGamingHeadphone);
router.get('/gamingHeadphone/:id',GamingHeadphoneController.getGamingHeadphonById);
router.patch('/gamingHeadphone/:id', GamingHeadphoneController.UpdateGamingHeadphone);
router.delete('/gamingHeadphone/:id', GamingHeadphoneController.deleteGamingHeadphone);

export const gamingHeadphoneRoute = router;
