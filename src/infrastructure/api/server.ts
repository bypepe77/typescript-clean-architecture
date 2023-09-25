import express, { Router } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import bodyParser from 'body-parser';
import compress from 'compression';
import errorHandler from 'errorhandler';
import Database from '../database/connection';
import { container } from 'tsyringe';
import { Controller } from './user/controller';


class Server {
  private app: express.Application;
  private port: number;
  private database: Database;

  constructor(port: number, database: Database) {
    this.app = express();
    this.port = port;
    this.database = database;
  }

  private registerMiddlewares(): void {
    this.app.use(helmet.xssFilter());
    this.app.use(helmet.noSniff());
    this.app.use(helmet.hidePoweredBy());
    this.app.use(helmet.frameguard({ action: 'deny' }));
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(compress());
    const router = Router();
    router.use(cors());
    router.use(errorHandler());
    this.app.use(router);
  }

  private registerRoutes(): void {
    const userController = container.resolve(Controller);
    this.app.post('/user', (req, res) => userController.handle(req, res));
  }

  private async connectToDatabase(): Promise<void> {
    try {
        await this.database.connect();
    } catch (error) {
        throw new Error('Failed to connect to database. Error: ' + error.message);
    }
  }

  
  public async start(): Promise<void> {
    try {
        await this.connectToDatabase();
        this.registerMiddlewares();
        this.registerRoutes();
        
        this.app.listen(this.port, () => {
            console.log(`Server listening on port ${this.port}`);
        });
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
  }
}

export default Server;
