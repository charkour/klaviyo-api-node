/**
 * Klaviyo API
 * The Klaviyo REST API. Please visit https://developers.klaviyo.com for more details.
 *
 * Contact: developers@klaviyo.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { PostCatalogVariantResponseData } from './postCatalogVariantResponseData';

export class PatchCatalogVariantResponse {
    'data': PostCatalogVariantResponseData;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "PostCatalogVariantResponseData"
        }    ];

    static getAttributeTypeMap() {
        return PatchCatalogVariantResponse.attributeTypeMap;
    }
}

