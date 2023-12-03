import express from "express";
import { paymentController } from "./payment.controller";

const router = express.Router();

router.get('/getPayment', paymentController.GetFromPaidData);
router.get('/getPayment/:email', paymentController.GetPaidDataByEmail);
router.get('/getPayment/:orderCode', paymentController.GetPaidDataByOrderCode);
router.post('/addPayment', paymentController.AddToPaidData);
router.post('/payment/create-payment-intent', paymentController.handleCreatePaymentIntent);

export const paymentRoute = router;