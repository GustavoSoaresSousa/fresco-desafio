import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

import { routesProduto } from './routes/produtoRoutes';
import { routesUsuarios } from './routes/userRoutes';

class App {
  app: any;
  constructor() {
    this.app = express();
    this.middleware();
    this.routes();
  }
  middleware() {
    this.app.use(cors());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }
  
  routes() {
    this.app.use('/usuario/', routesUsuarios);
    this.app.use('/produto/', routesProduto);
  }
}

export const app = new App().app;