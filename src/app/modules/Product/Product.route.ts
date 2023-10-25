import express from 'express';
import { productsController } from './Product.controller';



const router = express.Router();

router.post('/create-product',productsController.createProduct);

export const ProductsRoute = router;