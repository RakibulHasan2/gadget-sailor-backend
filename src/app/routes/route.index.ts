import express from 'express';
import { UserRoute } from './../modules/users/user.route';
import { CategoriesRoute } from '../modules/categories/categories..route';
import { subCategoriesRoute } from '../modules/sub_categories/sub_categories.route';
import { productsRoute } from '../modules/Product/products.route';
import { cartRoute } from '../modules/cart/cart.route';
import { BuildPCRoute } from '../modules/build_pc/build_pc.route';
import { favRoute } from '../modules/favourites/favourites.route';


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
    route: productsRoute
  },
  {
    path: '/',
    route: cartRoute
  },
  {
    path: '/',
    route: BuildPCRoute
  },
  {
    path: '/',
    route: favRoute
  }
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;