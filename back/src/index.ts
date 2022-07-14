import express from 'express';
import cors from 'cors';

const route = express.Router();


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
    this.app.use(
      route.get('/', (req, res) => {
        res.send('afjliaflafj')
      })
    )
  }
}

export const app = new App().app;