export class ClientError extends Error {
    constructor(msg, statusCode){
        super(msg);
        this.statusCode = statusCode;
    }
}