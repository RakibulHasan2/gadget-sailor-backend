import express from 'express';
import { ImacController } from './imac.controller';


const router = express.Router();

router.post('/add-imac',ImacController.createImac);

export const imacRoute = router;
