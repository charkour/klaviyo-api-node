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
import { GetListListResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsProfiles } from './getListListResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsProfiles';
import { GetListListResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsTags } from './getListListResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsTags';

export class GetListListResponseCollectionCompoundDocumentDataInnerAllOfRelationships {
    'profiles'?: GetListListResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsProfiles;
    'tags'?: GetListListResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsTags;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "profiles",
            "baseName": "profiles",
            "type": "GetListListResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsProfiles"
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "GetListListResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsTags"
        }    ];

    static getAttributeTypeMap() {
        return GetListListResponseCollectionCompoundDocumentDataInnerAllOfRelationships.attributeTypeMap;
    }
}

