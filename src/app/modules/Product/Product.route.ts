import express from 'express';
import { productsController } from './Product.controller';



const router = express.Router();

router.post('/add-product',productsController.createProduct);

export const ProductsRoute = router;