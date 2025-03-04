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
import { CatalogItemCreateQueryResourceObjectRelationships } from './catalogItemCreateQueryResourceObjectRelationships';
import { CatalogItemEnum } from './catalogItemEnum';
import { CatalogItemUpdateQueryResourceObjectAttributes } from './catalogItemUpdateQueryResourceObjectAttributes';

export class CatalogItemUpdateQueryResourceObject {
    'type': CatalogItemEnum;
    /**
    * The catalog item ID is a compound ID (string), with format: `{integration}:::{catalog}:::{external_id}`. Currently, the only supported integration type is `$custom`, and the only supported catalog is `$default`.
    */
    'id': string;
    'attributes': CatalogItemUpdateQueryResourceObjectAttributes;
    'relationships'?: CatalogItemCreateQueryResourceObjectRelationships;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "CatalogItemEnum"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "CatalogItemUpdateQueryResourceObjectAttributes"
        },
        {
            "name": "relationships",
            "baseName": "relationships",
            "type": "CatalogItemCreateQueryResourceObjectRelationships"
        }    ];

    static getAttributeTypeMap() {
        return CatalogItemUpdateQueryResourceObject.attributeTypeMap;
    }
}

export namespace CatalogItemUpdateQueryResourceObject {
}
