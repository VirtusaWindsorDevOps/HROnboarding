import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {EmployeeList} from '../models/employees.model';
import {EmpReceiveComponent} from '../components/empReceive.component';

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

    getOneEmployee(id:number): Observable<any>{
        return this.http.get('http://localhost:3000/Employees?Employee.IDCard.ID='+id)
        .map((res: Response) => {
            let singleJson = res.json();
            return singleJson;
        });
    }
}