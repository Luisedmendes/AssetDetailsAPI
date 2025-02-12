import { Router } from 'express';
import { assetDetailRouter } from './guardDetailRouter';

const routes = Router();
routes.use(assetDetailRouter);

export { routes };
