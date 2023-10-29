import express from 'express';
import { MonitorController } from './monitor.controller';




const router = express.Router();

router.post('/add-monitor',MonitorController.createMonitor);
router.get('/all-monitor',MonitorController.getAllMonitor);
router.get('/monitor/:id',MonitorController.getMonitorById);
router.patch('/monitor/:id', MonitorController.updateMonitor);
router.delete('/monitor/:id', MonitorController.deleteMonitor);

export const monitorRoute = router;
