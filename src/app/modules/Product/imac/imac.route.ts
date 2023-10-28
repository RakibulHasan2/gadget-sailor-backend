import express from 'express';
import { ImacController } from './imac.controller';


const router = express.Router();

router.post('/add-imac',ImacController.createImac);
router.get('/allImacs',ImacController.getAllImacs);

export const imacRoute = router;
