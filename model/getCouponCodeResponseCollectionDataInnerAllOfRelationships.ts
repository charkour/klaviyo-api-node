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
import { GetCouponCodeResponseCollectionDataInnerAllOfRelationshipsCoupon } from './getCouponCodeResponseCollectionDataInnerAllOfRelationshipsCoupon';
import { GetCouponCodeResponseCollectionDataInnerAllOfRelationshipsProfile } from './getCouponCodeResponseCollectionDataInnerAllOfRelationshipsProfile';

export class GetCouponCodeResponseCollectionDataInnerAllOfRelationships {
    'coupon'?: GetCouponCodeResponseCollectionDataInnerAllOfRelationshipsCoupon;
    'profile'?: GetCouponCodeResponseCollectionDataInnerAllOfRelationshipsProfile;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "coupon",
            "baseName": "coupon",
            "type": "GetCouponCodeResponseCollectionDataInnerAllOfRelationshipsCoupon"
        },
        {
            "name": "profile",
            "baseName": "profile",
            "type": "GetCouponCodeResponseCollectionDataInnerAllOfRelationshipsProfile"
        }    ];

    static getAttributeTypeMap() {
        return GetCouponCodeResponseCollectionDataInnerAllOfRelationships.attributeTypeMap;
    }
}

