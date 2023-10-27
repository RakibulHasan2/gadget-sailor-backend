import express from 'express';
import { productsController } from '../GlobalProducts.controller';



const router = express.Router();

router.post('/add-imac',productsController.createProduct);

export const ImacRoute = router;