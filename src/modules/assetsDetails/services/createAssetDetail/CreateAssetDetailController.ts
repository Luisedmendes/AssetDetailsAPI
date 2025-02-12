import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { IResponseDTO } from '@dtos/IResponseDTO';
import { CreateAssetDetailService } from './CreateAssetDetailService';
import { IAssetDetailDTO } from '@modules/assetsDetails/dtos/IAssetDetailDTO';

export class CreateAssetDetailController {
  public async handle(
    request: Request<never, never, IAssetDetailDTO>,
    response: Response<IResponseDTO<{id: string}>>,
  ) {
    const assetData = request.body;
    const createAsset = container.resolve(CreateAssetDetailService);

    const asset = await createAsset.execute(assetData);

    return response.status(asset.code).send(asset);
  }
}
