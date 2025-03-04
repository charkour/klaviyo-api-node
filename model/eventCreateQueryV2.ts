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
import { EventCreateQueryV2ResourceObject } from './eventCreateQueryV2ResourceObject';

export class EventCreateQueryV2 {
    'data': EventCreateQueryV2ResourceObject;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "EventCreateQueryV2ResourceObject"
        }    ];

    static getAttributeTypeMap() {
        return EventCreateQueryV2.attributeTypeMap;
    }
}

