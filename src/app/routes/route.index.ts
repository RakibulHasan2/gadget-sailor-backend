import express from 'express';
import { UserRoute } from './../modules/users/user.route';
import { CategoriesRoute } from '../modules/categories/categories..route';
import { subCategoriesRoute } from '../modules/sub_categories/sub_categories.route';
import { ImacRoute } from '../modules/Product/imac/imac.route';
import { GamingPcRoute } from '../modules/Product/Gaming_pc/Gaming_pc.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/',
    route: UserRoute
  },
  {
    path: '/',
    route: CategoriesRoute
  },
  {
    path: '/',
    route: subCategoriesRoute
  },
  {
    path: '/',
    route: ImacRoute
  },
  {
    path: '/',
    route: GamingPcRoute
  }
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;
