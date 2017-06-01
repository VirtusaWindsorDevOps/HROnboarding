import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {BackgroundList} from '../models/backgrounds.model';

@Injectable()
export class BackgroundService {
    constructor(private http: Http){}

 getBG(): Observable<any>{
        return this.http.get('http://52.14.104.9:9001/')
        .map((resp: Response) => {
            let bgJson = resp.json();
            console.log(bgJson);
            return bgJson.BackGrounds;
        });
    }
}