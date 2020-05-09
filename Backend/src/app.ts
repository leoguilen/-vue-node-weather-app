import express from 'express';
import cors from 'cors';
import routes from './api/routes';
import morgan from 'morgan';
import path from 'path';

class App {
    public express: express.Application

    public constructor () {
      this.express = express();
      this.Middleware();
      this.Routes();
    }

    private Middleware (): void {
      this.express.use(express.json());
      this.express.use(cors());
      this.express.use(morgan('tiny'));
    }

    private Routes(): void {
      this.express.route('/').get((req, res) => {
        res.type('html');
        res.sendFile(path.resolve('docs', 'index.html'));
      });
    
      this.express.use('/api/v1', routes);
    }
}

export default new App().express;
