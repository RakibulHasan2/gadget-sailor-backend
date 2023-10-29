import express from 'express';
import { Brand_pcController } from './brand_Pc.controller';




const router = express.Router();

router.post('/add-brand_pc', Brand_pcController.createBrand_pc);
router.get('/all-brand_pc',Brand_pcController.getAllBrand_pc);
router.get('/brand_pc/:id', Brand_pcController.getBrand_pcById);
router.patch('/brand_pc/:id', Brand_pcController.updateBrand_pc);
router.delete('/brand_pc/:id', Brand_pcController.deleteBrand_pc);

export const brand_pcRoute = router;