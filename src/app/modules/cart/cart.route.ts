import express from "express";
import { cartController } from "./cart.controller";

const router = express.Router();
router.post('/addCart', cartController.create_Cart);

export const cartRoute = router;