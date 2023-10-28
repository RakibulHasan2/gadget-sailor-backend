import express from 'express';
import { processorController } from './processor.controller';

const router = express.Router();

router.post('/add-Processor',processorController.createProcessor);
router.get('/all-processor',processorController.getAllProcessor);
router.get('/all-processor/:id',processorController.getProcessorById);
router.patch('/all-processor/:id',processorController.UpdateProcessor);
router.delete('/all-processor/:id',processorController.getDeleteProcessor);

export const processorRoute = router;