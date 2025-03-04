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
import { CatalogCategoryEnum } from './catalogCategoryEnum';

export class GetCatalogCategoryDeleteJobResponseCollectionDataInnerAllOfRelationshipsCategoriesDataInner {
    'type': CatalogCategoryEnum;
    /**
    * IDs of the deleted catalog categories.
    */
    'id': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "CatalogCategoryEnum"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return GetCatalogCategoryDeleteJobResponseCollectionDataInnerAllOfRelationshipsCategoriesDataInner.attributeTypeMap;
    }
}

export namespace GetCatalogCategoryDeleteJobResponseCollectionDataInnerAllOfRelationshipsCategoriesDataInner {
}
