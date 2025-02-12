import { injectable } from 'tsyringe';
import { instanceToInstance } from 'class-transformer';
import { IResponseDTO } from '@dtos/IResponseDTO';
import { IAssetDetailDTO } from '@modules/assetsDetails/dtos/IAssetDetailDTO';
import {v4 as uuid} from 'uuid';
import { AppError } from '@shared/errors/AppError';

@injectable()
export class CreateAssetDetailService {
  public constructor(
  ) {}

  public async execute(
    assetData: IAssetDetailDTO,
  ): Promise<IResponseDTO<{id: string}>> {

    try {
      const {  asset_name, legal_proof, owner, valuation } = assetData;

      if (!assetData || !legal_proof || !owner || !valuation) {
        throw new AppError('BAD_REQUEST', "Missing fields", 400);
      }

      console.log("asset_name", asset_name);
      console.log("legal_proof", legal_proof);
      console.log("owner", owner);
      console.log("valuation", valuation);


      return {
        code: 201,
        message_code: 'CREATED',
        message: 'Asset detail successfully created',
        data: {id: uuid()},
      };
    } catch (error: unknown) {
      throw error;
    } 
  }
}
