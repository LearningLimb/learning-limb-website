import { Http, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ApiService {
    headers: Headers = new Headers({
        'Content-Type': 'application/json',
        Accept: 'application/json'
    });

    constructor(private http: Http) { }

    private getJson(response: Response) {
        try {
            return response.json()
        } catch (err) { }
        return response;
    }

    get(uri: string): Observable<any> {
        return this.http.get(uri, { headers: this.headers })
            .map(this.getJson)
    }

    post(uri: string, body): Observable<any> {
        return this.http.post(uri, JSON.stringify(body), { headers: this.headers })
            .map(this.getJson)
    }

    delete(uri: string): Observable<any> {
        return this.http.delete(uri, { headers: this.headers })
            .map(this.getJson)
    }

    setHeaders(headers) {
        Object.keys(headers).forEach(header => this.headers.set(header, headers[header]));
    }
}
