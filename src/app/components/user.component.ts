import { Component } from '@angular/core';
import {PostsService} from '../Services/posts.service';
import {employees} from '../models/employees.model';
import {NavbarComponent} from './navbar.component';

@Component({
    moduleId: module.id,
    selector: 'user',
    templateUrl:'user.component.html',
    styleUrls: ['./navbar.component.css'],
    providers: [PostsService]
})
export class UserComponent  { 
 employees: employees;

  constructor(private postsService: PostsService){

   this.postsService.getPosts().subscribe(employees => this.employees = employees.Employees
  );
 }
}
