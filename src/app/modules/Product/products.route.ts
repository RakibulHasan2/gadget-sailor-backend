import express from 'express';
import { productsController } from './products.controller';

const router = express.Router();
router.post('/add-products', productsController.createProducts);
router.get('/get-allProducts', productsController.getAllProducts);

export const productsRoute = router;