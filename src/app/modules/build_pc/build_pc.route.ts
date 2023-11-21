import express from 'express';
import {BuildPCController } from './build_pc.controller';

const router = express.Router();

router.post('/create-build-pc',BuildPCController.createBuildPC);
router.get('/get-build-pc', BuildPCController.getAllBuildPC);
router.get('/get-build-pc/:id', BuildPCController.getSingleBuildPC);

export const  BuildPCRoute = router;
