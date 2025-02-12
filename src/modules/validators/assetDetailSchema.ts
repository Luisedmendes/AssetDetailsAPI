import { IAssetDetailDTO } from "@modules/assetsDetails/dtos/IAssetDetailDTO";
import { celebrate, Joi, Segments } from "celebrate";

export const assetDetailSchema = celebrate({
    [Segments.PARAMS]: Joi.object({}),
    [Segments.QUERY]: Joi.object({}),
    [Segments.BODY]: Joi.object<IAssetDetailDTO>({
        asset_name: Joi.string(),
        valuation: Joi.number(),
        owner: Joi.string(),
        legal_proof: Joi.string(),
    })
})