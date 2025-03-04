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
import { CatalogItemBulkCreateJobEnum } from './catalogItemBulkCreateJobEnum';
import { CatalogItemCreateJobCreateQueryResourceObjectAttributes } from './catalogItemCreateJobCreateQueryResourceObjectAttributes';

export class CatalogItemCreateJobCreateQueryResourceObject {
    'type': CatalogItemBulkCreateJobEnum;
    'attributes': CatalogItemCreateJobCreateQueryResourceObjectAttributes;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "CatalogItemBulkCreateJobEnum"
        },
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "CatalogItemCreateJobCreateQueryResourceObjectAttributes"
        }    ];

    static getAttributeTypeMap() {
        return CatalogItemCreateJobCreateQueryResourceObject.attributeTypeMap;
    }
}

export namespace CatalogItemCreateJobCreateQueryResourceObject {
}
