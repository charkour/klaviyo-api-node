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
import { TemplateCloneQueryResourceObject } from './templateCloneQueryResourceObject';

export class TemplateCloneQuery {
    'data': TemplateCloneQueryResourceObject;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "TemplateCloneQueryResourceObject"
        }    ];

    static getAttributeTypeMap() {
        return TemplateCloneQuery.attributeTypeMap;
    }
}

