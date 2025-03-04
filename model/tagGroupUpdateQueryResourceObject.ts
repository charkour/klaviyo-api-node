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
import { TagGroupEnum } from './tagGroupEnum';
import { TagGroupUpdateQueryResourceObjectAttributes } from './tagGroupUpdateQueryResourceObjectAttributes';

export class TagGroupUpdateQueryResourceObject {
    'type': TagGroupEnum;
    /**
    * The Tag Group ID
    */
    'id': string;
    'attributes': TagGroupUpdateQueryResourceObjectAttributes;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "TagGroupEnum"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "TagGroupUpdateQueryResourceObjectAttributes"
        }    ];

    static getAttributeTypeMap() {
        return TagGroupUpdateQueryResourceObject.attributeTypeMap;
    }
}

export namespace TagGroupUpdateQueryResourceObject {
}
