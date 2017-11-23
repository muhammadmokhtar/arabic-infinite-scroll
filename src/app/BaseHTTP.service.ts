import { Injectable } from '@angular/core';
import { Http, Response, Jsonp, RequestOptionsArgs, Headers, Request } from '@angular/http';
import { Observable } from 'rxjs/Observable';
/*
 * warpper to perform all HTTP web request
 */

@Injectable()
export class BaseHTTPService {
    public static _baseUrl: string;
    private headers: Headers;
    // private _productUrl = 'http://dev.archer.solutions/clinix/public/';
    public headerDict;
    public headerObj;

    constructor(protected httpService: Http) {
        // BaseHTTPService._baseUrl = this.config.getConfig('host');
        BaseHTTPService._baseUrl = 'http://136.243.57.153:8080/api/';
        }

    private buildHeaders(): void {
        // this.headers = new Headers();
        // this.headers.append('Accept', '*/*');
        // this.headers.append('Content-Type', 'application/json');
        // this.headers.append('Content-Type', 'application/json; charset=UTF-8');
        // const args: RequestOptionsArgs = { headers: this.headers };
            this.headerDict = new Headers({
            'Content-Type': 'application/json; charset=UTF-8',
            // 'Accept': 'application/json',
            'Accept' : '*/*',
            'crossDomain': true,
            'cache-control': 'no-cache',
            });

            // this.headerObj = {
            // headers: new Headers(this )
            // };
    }
    getAll(url: any): Observable<any> {
        this.buildHeaders();
        return (<any>this.httpService.get(BaseHTTPService._baseUrl + url, { headers: this.headers, body: '', withCredentials: false }));
            // .map((res: Response) => {
            //     if (res.json()) {
            //         return res.json() as any[];
            //     } else {
            //         // this.handleError(res.json().errorHeader);
            //     }
            // .catch(this.handleError);
    }
}
