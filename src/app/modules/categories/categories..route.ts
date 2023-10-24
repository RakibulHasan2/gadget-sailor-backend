import express from 'express';
import { categoriesController } from './categories.controller';


const router = express.Router();

//user signup 
router.post('/create-category',categoriesController.createCategories);
router.get('/get-AllCategories', categoriesController.getAllCategories);

export const CategoriesRoute = router;
