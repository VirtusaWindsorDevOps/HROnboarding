import { Component } from '@angular/core';
import {PostsService} from '../Services/posts.service';
import {EmployeeList} from '../models/employees.model';
import {NavbarComponent} from './navbar.component';

@Component({
    moduleId: module.id,
    selector: 'user',
    templateUrl:'user.component.html',
    styleUrls: ['./navbar.component.css'],
    providers: [PostsService]
})
export class UserComponent  { 
 employees: EmployeeList;

  constructor(private postsService: PostsService){

   this.postsService.getPosts().subscribe(employees => this.employees = employees
  );
 }
}
