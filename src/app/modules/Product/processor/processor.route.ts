import express from 'express';
import { processorController } from './processor.controller';

const router = express.Router();

router.post('/add-Processor',processorController.createProcessor);

export const processorRoute = router;