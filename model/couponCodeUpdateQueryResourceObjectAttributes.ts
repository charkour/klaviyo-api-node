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

export class CouponCodeUpdateQueryResourceObjectAttributes {
    /**
    * The API status of our coupon codes.
    */
    'status'?: CouponCodeUpdateQueryResourceObjectAttributes.StatusEnum;
    /**
    * The datetime when this coupon code will expire. If not specified or set to null, it will be automatically set to 1 year.
    */
    'expiresAt'?: Date;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "status",
            "baseName": "status",
            "type": "CouponCodeUpdateQueryResourceObjectAttributes.StatusEnum"
        },
        {
            "name": "expiresAt",
            "baseName": "expires_at",
            "type": "Date"
        }    ];

    static getAttributeTypeMap() {
        return CouponCodeUpdateQueryResourceObjectAttributes.attributeTypeMap;
    }
}

export namespace CouponCodeUpdateQueryResourceObjectAttributes {
    export enum StatusEnum {
        AssignedToProfile = <any> 'ASSIGNED_TO_PROFILE',
        Deleting = <any> 'DELETING',
        Processing = <any> 'PROCESSING',
        Unassigned = <any> 'UNASSIGNED',
        VersionNotActive = <any> 'VERSION_NOT_ACTIVE'
    }
}
