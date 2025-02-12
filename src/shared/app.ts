import 'dotenv/config';
import "reflect-metadata";
import 'express-async-errors';
import express, { Express } from 'express';
import { routes } from '../routes';
import { errorHandler } from '@middlewares/errorHandler';

class App {
  public readonly server: Express;

  public constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
    this.errorHandlers();
  }

  private middlewares(): void {
    this.server.use(express.json());
  }

  private routes(): void {
    this.server.use(routes);
  }

  private errorHandlers(): void {
    this.server.use(errorHandler);
  }

  public init(): void {
    this.server.listen(process.env.PORT, () => {
      console.log(`🚀 Server started on port ${process.env.PORT}!`);
    });
  }
}

export const app = new App();
