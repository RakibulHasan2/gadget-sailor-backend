import express from 'express';
import { UserRoute } from './../modules/users/user.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/',
    route: UserRoute
  }
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;
