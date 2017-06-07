import {Component} from '@angular/core';
import {Response} from '@angular/http';
import { ActivatedRoute, Params} from '@angular/router';
import {PostsService} from '../Services/posts.service';
import {Observable} from 'rxjs/Rx';
import {EmployeeListAlt} from '../models/altEmployees.model';
import {NavbarComponent} from './navbar.component';

@Component({
    moduleId: module.id,
    selector: 'test',
    providers: [PostsService],
    templateUrl: 'empReceive.component.html',
    styleUrls: ['./navbar.component.css']
})
export class EmpReceiveComponent{

    employee: EmployeeListAlt = null;
    private displayId: number = this.ngOnInit();

    constructor(private route: ActivatedRoute, private postsService: PostsService){
        this.postsService.getOneEmployee(this.displayId).subscribe(employee => {
            console.log(employee);
            this.employee = employee[0];
        });
    }

     ngOnInit(): number {
    // subscribe to router event for path params
    this.route.params.subscribe((params: Params) => {
        let id: number = params['id'];
        this.displayId = id;
      });
      return this.displayId;
  }

}