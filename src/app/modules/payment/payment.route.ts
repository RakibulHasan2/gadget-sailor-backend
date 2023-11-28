import express from "express";
import { paymentController } from "./payment.controller";

const router = express.Router();

router.get('/getPayment', paymentController.GetFromPaidData);
router.post('/addPayment', paymentController.AddToPaidData);

export const paymentRoute = router;