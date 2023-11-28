import express from "express";
import { paymentController } from "./payment.controller";

const router = express.Router();

router.get('/getPayment', paymentController.GetFromPaidData);
router.get('/getPayment/:email', paymentController.GetPaidDataByEmail);
router.post('/addPayment', paymentController.AddToPaidData);

export const paymentRoute = router;