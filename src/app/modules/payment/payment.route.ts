import express from "express";
import { paymentController } from "./payment.controller";

const router = express.Router();

router.post('/addPayment', paymentController.AddToPaidData);

export const paymentRoute = router;