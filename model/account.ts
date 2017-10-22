export interface IAccount {
    id: any;
    title: string;
    createdTimeStamp: number;
    createdBy: string;
    // we can also do it like this locations: IAccountLocation[] after importing IAccountLocation
    locations: any;
}