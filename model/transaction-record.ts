import { IValueOption } from './value-option';


export interface ITransactionRecord {
    createdBy: string;
    timeStampScan?: number;
    timeStampCommit?: number;
    deviceId: any;
    userId: any;
    username: string;
    location: string;
    status: IValueOption<string>[];
    note: string;
}

export class TransactionRecord implements ITransactionRecord {
    timeStampScan = 0;
    timeStampCommit = 0;
    deviceId = '';
    username = '';
    location = '';
    status = [{title:'',value:''}];
    note = '';
    createdBy;
    userId;

    constructor(createdBy: string, userId: any) {
        this.createdBy = createdBy;
        this.userId = userId;
    }
}