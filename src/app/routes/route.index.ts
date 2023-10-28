import express from 'express';
import { UserRoute } from './../modules/users/user.route';
import { CategoriesRoute } from '../modules/categories/categories..route';
import { subCategoriesRoute } from '../modules/sub_categories/sub_categories.route';
import { processorRoute } from '../modules/Product/processor/processor.route';
import { imacRoute } from '../modules/Product/imac/imac.route';

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
    route: processorRoute
  },
  {
    path:'/',
    route: imacRoute
  }
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;