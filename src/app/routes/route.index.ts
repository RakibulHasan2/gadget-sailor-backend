import express from 'express';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/'
  }
];

moduleRoutes.forEach(route => router.use(route.path));

export default router;
