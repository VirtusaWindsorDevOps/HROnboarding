import { Component } from '@angular/core';
import {PostsService} from '../Services/posts.service';
import {employees} from '../models/employees.model';

@Component({
    moduleId: module.id,
    selector: 'laptop',
    templateUrl: 'laptop.component.html',
    styleUrls: ['navbar.component.css'],
    providers: [PostsService]
})
export class LaptopComponent  { 
  employees: employees;

  constructor(private postsService: PostsService){

   this.postsService.getPosts().subscribe(employees => this.employees = employees.Employees
  );
 }
}
