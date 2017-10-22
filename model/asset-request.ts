import { IValueOption } from './value-option';


export interface IAssetRequest {
    requestedBy: string;
    requestedTimeStamp: string;
    assetId: any;
    serviceType: IValueOption<string>[];
    office:string;
    location:string;
    priority: IValueOption<string>[];
    deliverByDateTime: string;
    note: string;
    status: string;
}

export class AssetRequest implements IAssetRequest {
    requestedTimeStamp = new Date().toLocaleString();
    office = '';
    location = '';
    deliverByDateTime = new Date().toISOString();
    serviceType = [{title:'',value:''}];
    priority = [{title:'',value:''}];
    status = 'New';
    note = '';
    requestedBy;
    assetId;

    constructor(requestedBy: string, assetId: any, office:string, location:string) {
        this.requestedBy = requestedBy;
        this.assetId = assetId;
        this.office = office;
        this.location = location;
    }
}