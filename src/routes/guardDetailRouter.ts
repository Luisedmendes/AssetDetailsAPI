import { CreateAssetDetailController } from '@modules/assetsDetails/services/createAssetDetail/CreateAssetDetailController';
import { assetDetailSchema } from '@modules/validators/assetDetailSchema';
import { Router } from 'express';


const assetDetailRouter = Router();
const createAssetDetailController = new CreateAssetDetailController();


assetDetailRouter
  .post(`/asset-details`, assetDetailSchema, createAssetDetailController.handle)


export { assetDetailRouter };
