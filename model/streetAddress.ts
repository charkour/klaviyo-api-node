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

export class StreetAddress {
    'address1': string;
    'address2': string;
    'city': string;
    /**
    * State, province, or region.
    */
    'region': string;
    /**
    * Two-letter [ISO country code](https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes)
    */
    'country': string;
    'zip': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "address1",
            "baseName": "address1",
            "type": "string"
        },
        {
            "name": "address2",
            "baseName": "address2",
            "type": "string"
        },
        {
            "name": "city",
            "baseName": "city",
            "type": "string"
        },
        {
            "name": "region",
            "baseName": "region",
            "type": "string"
        },
        {
            "name": "country",
            "baseName": "country",
            "type": "string"
        },
        {
            "name": "zip",
            "baseName": "zip",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return StreetAddress.attributeTypeMap;
    }
}

