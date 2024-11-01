class HTTPRequest {
    public method: string;
    public uri: string;
    public version: string;
    public message: string;
    public response: string | undefined = undefined;
    public fullfield: boolean = false;

    constructor(method: string, uri: string, version: string, message: string) {
        this.method = method;
        this.uri = uri;
        this.version = version;
        this.message = message;
    }
}

const myRequest=new HTTPRequest("GET","http://google.com","HTTP/1.1"," ");
console.log(myRequest);