import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Injectable} from '@angular/core';
import {Post} from './post';
import {Comment} from '../shared/comment'
import {Observable} from 'rxjs/Observable';

@Injectable()
export class PostsService {
    private _url = "https://jsonplaceholder.typicode.com/posts";

    constructor(private _http: Http) {}

    getPosts(userId?) : Observable<Post[]> {
        if(userId) {
            return this._http.get(this._url + "?userId=" + userId)
            .map(res => res.json());
        } 
        return this._http.get(this._url)
            .map(res => res.json());
    }

    getComments(postId) : Observable<Comment[]> {
        return this._http.get(this._url + "/" + postId + "/comments")
            .map(res => res.json());
    }
}
