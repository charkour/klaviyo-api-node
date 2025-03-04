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
import { CouponCodeBulkCreateJobEnum } from './couponCodeBulkCreateJobEnum';
import { CouponCodeCreateJobCreateQueryResourceObjectAttributes } from './couponCodeCreateJobCreateQueryResourceObjectAttributes';

export class CouponCodeCreateJobCreateQueryResourceObject {
    'type': CouponCodeBulkCreateJobEnum;
    'attributes': CouponCodeCreateJobCreateQueryResourceObjectAttributes;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "CouponCodeBulkCreateJobEnum"
        },
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "CouponCodeCreateJobCreateQueryResourceObjectAttributes"
        }    ];

    static getAttributeTypeMap() {
        return CouponCodeCreateJobCreateQueryResourceObject.attributeTypeMap;
    }
}

export namespace CouponCodeCreateJobCreateQueryResourceObject {
}
