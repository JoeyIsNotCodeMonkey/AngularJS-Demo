import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Injectable} from '@angular/core';
import {User} from './user';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class UsersService {
    private _url = "https://jsonplaceholder.typicode.com/users";

    constructor(private _http: Http) {

    }

    getUsers() : Observable<User[]> {
        return this._http.get(this._url)
            .map(res => res.json());
    }

    getUser(userId) {
        return this._http.get(this._url + "/" + userId)
			.map(res => res.json());
    }

    createUser(user) {
        return this._http.post(this._url, JSON.stringify(user))
            .map(res => res.json());
    }

    updateUser(user) {
        return this._http.put((this._url + "/" + user.id), JSON.stringify(user))
            .map(res => res.json());
    }

    deleteUser(userId) {
         return this._http.delete(this._url + "/" + userId)
			.map(res => res.json());
    }
}