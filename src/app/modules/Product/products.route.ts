import express from 'express';
import { productsController } from './products.controller';

const router = express.Router();
router.post('/add-products',productsController.createProducts);

export const productsRoute = router;