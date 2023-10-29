import express from 'express';
import { Graphics_CardController } from './graphics_card.controller';

const router = express.Router();

router.post('/add-graphics_card',Graphics_CardController.createGraphics_Card);
router.get('/all-graphics_card',Graphics_CardController.getAllGraphics_Card);
router.get('/all-graphics_card/:id',Graphics_CardController.getGraphics_CardById);
router.patch('/all-graphics_card/:id',Graphics_CardController.UpdateGraphics_Card);
router.delete('/all-graphics_card/:id',Graphics_CardController.getDeleteGraphics_Card);

export const Graphics_CardRoute = router;