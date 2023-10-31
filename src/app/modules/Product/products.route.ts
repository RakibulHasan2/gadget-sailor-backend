import express from 'express';
import { productsController } from './products.controller';

const router = express.Router();
router.post('/add-products', productsController.createProducts);
router.get('/allProducts', productsController.getAllProducts);
router.get('/allProducts/:id', productsController.getSingleProduct);
router.put('/allProducts/:id', productsController.updateSingleProduct);
router.delete('/allProducts/:id', productsController.DeleteProduct);

export const productsRoute = router;
