import express from 'express';
import { Hard_diskController } from './hard_disk.controller';



const router = express.Router();

router.post('/add-hard_disk',Hard_diskController.createHard_disk);
router.get('/all-hard_disk',Hard_diskController.getAllHard_disk);
router.get('/hard_disk/:id',Hard_diskController.getHard_diskById);
router.patch('/hard_disk/:id', Hard_diskController.updateHard_disk);
router.delete('/hard_disk/:id', Hard_diskController.deleteHard_disk);

export const hard_diskRoute = router;
