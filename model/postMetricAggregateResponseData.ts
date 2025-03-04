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
import { MetricAggregateEnum } from './metricAggregateEnum';
import { ObjectLinks } from './objectLinks';
import { PostMetricAggregateResponseDataAttributes } from './postMetricAggregateResponseDataAttributes';

export class PostMetricAggregateResponseData {
    'type': MetricAggregateEnum;
    /**
    * Ephemeral ID associated with the aggregation query
    */
    'id': string;
    'attributes': PostMetricAggregateResponseDataAttributes;
    'links': ObjectLinks;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "MetricAggregateEnum"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "PostMetricAggregateResponseDataAttributes"
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "ObjectLinks"
        }    ];

    static getAttributeTypeMap() {
        return PostMetricAggregateResponseData.attributeTypeMap;
    }
}

export namespace PostMetricAggregateResponseData {
}
