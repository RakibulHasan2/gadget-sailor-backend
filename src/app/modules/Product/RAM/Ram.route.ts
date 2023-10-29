import express from 'express';
import { RamController } from './Ram.controller';





const router = express.Router();

router.post('/add-Ram',RamController.createRam);
router.get('/all-Ram',RamController.getAllRam);
router.get('/Ram/:id',RamController.getRamById);
router.patch('/Ram/:id', RamController.updateRam);
router.delete('/Ram/:id', RamController.deleteRam);

export const ramRoute = router;
