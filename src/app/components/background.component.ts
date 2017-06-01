import { Component } from '@angular/core';
import {PostsService} from '../Services/posts.service';
import {BackgroundService} from '../Services/backgrounds.service';
import {EmployeeList} from '../models/employees.model';
import {BackgroundList} from '../models/backgrounds.model';
import {NavbarComponent} from './navbar.component';

@Component({
    moduleId: module.id,
    selector: 'background',
    templateUrl:'background.component.html',
    styleUrls: ['./navbar.component.css'],
    providers: [PostsService, BackgroundService]
   
})
export class BackgroundComponent  {
  employees: EmployeeList; 
  backgrounds: BackgroundList;

  constructor(private postsService: PostsService, private bgService: BackgroundService){

    this.postsService.getPosts().subscribe(employees => this.employees = employees
  );

    this.bgService.getBG().subscribe(backgrounds => this.backgrounds = backgrounds
  );
  
 }
}

 