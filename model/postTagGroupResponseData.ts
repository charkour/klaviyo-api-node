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
import { GetTagGroupResponseCollectionDataInnerAllOfRelationships } from './getTagGroupResponseCollectionDataInnerAllOfRelationships';
import { ObjectLinks } from './objectLinks';
import { TagGroupEnum } from './tagGroupEnum';
import { TagGroupResponseObjectResourceAttributes } from './tagGroupResponseObjectResourceAttributes';

export class PostTagGroupResponseData {
    'type': TagGroupEnum;
    /**
    * The Tag Group ID
    */
    'id': string;
    'attributes': TagGroupResponseObjectResourceAttributes;
    'relationships'?: GetTagGroupResponseCollectionDataInnerAllOfRelationships;
    'links': ObjectLinks;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "TagGroupEnum"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "TagGroupResponseObjectResourceAttributes"
        },
        {
            "name": "relationships",
            "baseName": "relationships",
            "type": "GetTagGroupResponseCollectionDataInnerAllOfRelationships"
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "ObjectLinks"
        }    ];

    static getAttributeTypeMap() {
        return PostTagGroupResponseData.attributeTypeMap;
    }
}

export namespace PostTagGroupResponseData {
}
