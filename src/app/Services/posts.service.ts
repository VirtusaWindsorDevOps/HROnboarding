import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostsService {
    constructor(private http: Http){
        console.log("PostsService Initialized...");
    }

    getPosts(){
        return this.http.get('http://52.14.104.9:9000/')
        .map(res => res.json());
    }

    getBG(){
        return this.http.get('http://52.14.104.9:9001/')
        .map(res => res.json());
    }
}