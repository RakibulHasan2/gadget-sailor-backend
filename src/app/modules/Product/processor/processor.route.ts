import express from 'express';
import { productsController } from '../Product.controller';



const router = express.Router();

router.post('/add-Processor',productsController.createProduct);

export const processorRoute = router;