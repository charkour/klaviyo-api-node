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

export class CampaignRecipientEstimationJobResponseObjectResourceAttributes {
    /**
    * The status of the recipient estimation job
    */
    'status': CampaignRecipientEstimationJobResponseObjectResourceAttributes.StatusEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "status",
            "baseName": "status",
            "type": "CampaignRecipientEstimationJobResponseObjectResourceAttributes.StatusEnum"
        }    ];

    static getAttributeTypeMap() {
        return CampaignRecipientEstimationJobResponseObjectResourceAttributes.attributeTypeMap;
    }
}

export namespace CampaignRecipientEstimationJobResponseObjectResourceAttributes {
    export enum StatusEnum {
        Cancelled = <any> 'cancelled',
        Complete = <any> 'complete',
        Processing = <any> 'processing',
        Queued = <any> 'queued'
    }
}
