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
import { CatalogItemBulkDeleteJobEnum } from './catalogItemBulkDeleteJobEnum';
import { CouponCodeCreateJobResponseObjectResourceAttributes } from './couponCodeCreateJobResponseObjectResourceAttributes';
import { GetCatalogItemDeleteJobResponseCollectionDataInnerAllOfRelationships } from './getCatalogItemDeleteJobResponseCollectionDataInnerAllOfRelationships';
import { ObjectLinks } from './objectLinks';

export class PostCatalogItemDeleteJobResponseData {
    'type': CatalogItemBulkDeleteJobEnum;
    'attributes': CouponCodeCreateJobResponseObjectResourceAttributes;
    'relationships'?: GetCatalogItemDeleteJobResponseCollectionDataInnerAllOfRelationships;
    'links': ObjectLinks;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "CatalogItemBulkDeleteJobEnum"
        },
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "CouponCodeCreateJobResponseObjectResourceAttributes"
        },
        {
            "name": "relationships",
            "baseName": "relationships",
            "type": "GetCatalogItemDeleteJobResponseCollectionDataInnerAllOfRelationships"
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "ObjectLinks"
        }    ];

    static getAttributeTypeMap() {
        return PostCatalogItemDeleteJobResponseData.attributeTypeMap;
    }
}

export namespace PostCatalogItemDeleteJobResponseData {
}
