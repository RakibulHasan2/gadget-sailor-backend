import express from "express";
import { favController } from "./favourites.controller";

const router = express.Router();

router.post('/addFav', favController.AddToFav);

export const favRoute = router;