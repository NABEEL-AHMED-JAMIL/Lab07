export interface IRequest {
    assetId: string;
    assetName: string;
    assetRequestor: string;
    name: string;
    sender: string;
    senderEmail: string;
    subject: string;
    template: string;
    to: string;
}

export class Request implements IRequest {
    assetId = "";
    assetName = "";
    assetRequestor = "";
    name = "";
    sender = "";
    senderEmail = "";
    subject = "";
    template = "";
    to = "";

    constructor(sender: string, senderEmail: string, subject: string, template: string, to: string) {
        this.sender = sender;
        this.senderEmail = senderEmail;
        this.subject = subject;
        this.template = template;
        this.to = to;
    }
}


