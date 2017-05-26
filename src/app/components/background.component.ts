import { Component } from '@angular/core';
import {PostsService} from '../Services/posts.service';
import {employees} from '../models/employees.model';
import {background} from '../models/background.model';
import {NavbarComponent} from './navbar.component';

@Component({
    moduleId: module.id,
    selector: 'background',
    templateUrl:'background.component.html',
    styleUrls: ['./navbar.component.css'],
    providers: [PostsService]
   
})
export class BackgroundComponent  { 
  background: background[];
  employees: employees;

  constructor(private postsService: PostsService){

    this.postsService.getPosts().subscribe(employees => this.employees = employees.Employees
  );

  this.postsService.getBG().subscribe(background => {
      this.background = [background.BackGround];
  });
 }
}

 