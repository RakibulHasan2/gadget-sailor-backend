import express from 'express';
import { productsController } from '../GlobalProducts.controller';




const router = express.Router();

router.post('/add-gamingPc',productsController.createProduct);

export const GamingPcRoute = router;