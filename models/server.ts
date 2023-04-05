import express, { Application } from 'express';
import cors from 'cors';
import db from '../db/connection';
import userRoutes from '../routes/categoria';
import categoria from './categoria';



class Server {
  private app: Application;
  private port: string | undefined;
  private apiPaths = {
    categoria: '/api/categoria',
  }

  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.dbConnection();
    this.middlewares();
    this.routes();
  }

  async dbConnection() {
    try {
      await db.authenticate();
      console.log('database online');
    } catch (error) {
      console.log(error);
    }
  }

  middlewares(){
    this.app.use( express.json() );
    this.app.use( cors() );
  }

  routes(){
    this.app.use(this.apiPaths.categoria, userRoutes)
  }

  listen() {
    this.app.listen(this.port, () => {
        console.log('SERVIDOR CORRIENDO EN EL PUERTO', this.port)
    })
  }
}

export default Server;