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
import { STOScheduleOptions } from './sTOScheduleOptions';
import { StaticScheduleOptions } from './staticScheduleOptions';
import { ThrottledScheduleOptions } from './throttledScheduleOptions';

export class SendStrategySubObject {
    /**
    * Describes the shape of the options object. Allowed values: [\'static\', \'throttled\', \'immediate\', \'smart_send_time\']
    */
    'method': string;
    'optionsStatic'?: StaticScheduleOptions;
    'optionsThrottled'?: ThrottledScheduleOptions;
    'optionsSto'?: STOScheduleOptions;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "method",
            "baseName": "method",
            "type": "string"
        },
        {
            "name": "optionsStatic",
            "baseName": "options_static",
            "type": "StaticScheduleOptions"
        },
        {
            "name": "optionsThrottled",
            "baseName": "options_throttled",
            "type": "ThrottledScheduleOptions"
        },
        {
            "name": "optionsSto",
            "baseName": "options_sto",
            "type": "STOScheduleOptions"
        }    ];

    static getAttributeTypeMap() {
        return SendStrategySubObject.attributeTypeMap;
    }
}

