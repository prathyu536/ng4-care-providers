import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Headers } from '@angular/http';

const headers: Headers  = new Headers();
headers.append('Content-Type', 'application/json');

@Injectable()
export class HomeService {
    private _url: any = 'userslist';

    constructor(private http: Http) {}

    createUser(_user: object): Observable<any> {
        return this.http
        .post(this._url, {data: _user}, {
            headers: headers
        })
        .map(res => res.json());
    }

    deleteUser(_id: string): Observable<any>  {
        const _url = this._url + '/' + _id;
        return this.http
        .delete(_url)
        .map(res => res.json());
    }

    editUser(_id: string, _user: object): Observable<any>  {
        const _url = this._url + '/' + _id;
        return this.http
        .put(_url, {data: _user}, {
           headers: headers
        })
        .map(res => res.json());
    }
}
