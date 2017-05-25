import { Component } from '@angular/core';
import {PostsService} from '../Services/posts.service';

@Component({
    moduleId: module.id,
    selector: 'user',
    templateUrl:'user.component.html',
    providers: [PostsService]
})
export class UserComponent  { 
  employees: Employees;

  constructor(private postsService: PostsService){

   this.postsService.getPosts().subscribe(employees => this.employees = employees.Employees
  );
 }
}

interface Employees{
    Employee: Employee[];
}

 interface Employee{
     IDCard: IdCard;
     Laptop: Laptop;
 }

 interface IdCard{
    ID: number;
    FirstName: string;
    LastName: string;
    Status: string;
    Role: string;
    Citizenship: string;
    WorkLocation: string;
 }

 interface Laptop{
    Model: string;
    Brand: string;
    LaptopID: string;
    TrackingNumber: string;
 }
