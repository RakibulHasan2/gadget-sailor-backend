import express from 'express';
import { ReviewsController } from './reviews.controller';

const router = express.Router();

router.post('/create-category',ReviewsController.createReviews);
router.get('/get-AllCategories', ReviewsController.getAllReviews);

export const reviewsRoute = router;
