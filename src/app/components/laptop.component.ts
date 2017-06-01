import { Component } from '@angular/core';
import {PostsService} from '../Services/posts.service';
import {EmployeeList} from '../models/employees.model';
import {NavbarComponent} from './navbar.component';

@Component({
    moduleId: module.id,
    selector: 'laptop',
    templateUrl: 'laptop.component.html',
    styleUrls: ['navbar.component.css'],
    providers: [PostsService]
})
export class LaptopComponent  { 
  employees: EmployeeList;

  constructor(private postsService: PostsService){

   this.postsService.getPosts().subscribe(employees => this.employees = employees
  );
 }
}
