import express from 'express';
import { processorController } from './processor.controller';

const router = express.Router();

router.post('/add-Processor',processorController.createProcessor);
router.get('/all-processor',processorController.getAllProcessor);

export const processorRoute = router;