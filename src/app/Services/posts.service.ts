import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {EmployeeList} from '../models/employees.model';

@Injectable()
export class PostsService {
    constructor(private http: Http){}

    getPosts(): Observable<any>{
        return this.http.get('http://52.14.104.9:9000/')
        .map((res: Response) => {
            let empJson = res.json();
            return empJson.Employees;
        });
    }
}