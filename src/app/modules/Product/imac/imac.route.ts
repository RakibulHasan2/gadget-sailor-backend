import express from 'express';
import { ImacController } from './imac.controller';


const router = express.Router();

router.post('/add-imac',ImacController.createImac);
router.get('/all-imac',ImacController.getAllImacs);
router.get('/imac/:id',ImacController.getImacById);
router.patch('/imac/:id', ImacController.updateImac);
router.delete('/imac/:id', ImacController.deleteImac);

export const imacRoute = router;
