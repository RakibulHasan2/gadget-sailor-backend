import express from 'express';
import { UserRoute } from './../modules/users/user.route';
import { CategoriesRoute } from '../modules/categories/categories..route';
import { subCategoriesRoute } from '../modules/sub_categories/sub_categories.route';
import { processorRoute } from '../modules/Product/processor/processor.route';
import { imacRoute } from '../modules/Product/imac/imac.route';
import { productsRoute } from '../modules/Product/products.route';
import { MotherboardRoute } from '../modules/Product/motherboard/motherboard.route';
import { gamingRoute } from '../modules/Product/Gaming_pc/Gaming_pc.route';
import { brand_pcRoute } from '../modules/Product/brand_pc/brand_Pc.route';
import { laptopRoute } from '../modules/Product/laptop/laptop.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/',
    route: UserRoute
  },
  {
    path: '/',
    route: productsRoute 
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
    path: '/',
    route: MotherboardRoute
  },
  {
    path:'/',
    route: imacRoute
  },
  
  {
    path:'/',
    route: gamingRoute
  },
  
  {
    path:'/',
    route: brand_pcRoute
  },
  {
    path:'/',
    route: laptopRoute
  },
  
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;