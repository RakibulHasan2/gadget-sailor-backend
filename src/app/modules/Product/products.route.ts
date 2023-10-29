import express from 'express';
import { productsController } from './products.controller';

const router = express.Router();
router.get('/all-products',productsController.getAllProducts);

export const productsRoute = router;