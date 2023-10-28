import express from 'express';
import { productsController } from './products.controller';
import { productsService } from './products.service';


const router = express.Router();

router.get('/all-products',productsController.getAllProducts);

export const productsRoute = router;