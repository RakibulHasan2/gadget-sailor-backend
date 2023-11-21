import express from "express";
import { favController } from "./favourites.controller";

const router = express.Router();

router.get('/getFav', favController.GetFromFav);
router.get('/getFav/:email', favController.GetFavByEmail);
router.post('/addFav', favController.AddToFav);

export const favRoute = router;