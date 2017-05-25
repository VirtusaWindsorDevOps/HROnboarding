import { Component } from '@angular/core';
import {PostsService} from '../Services/posts.service';

@Component({
    moduleId: module.id,
    selector: 'background',
    templateUrl:'background.component.html',
    providers: [PostsService]
})
export class BackgroundComponent  { 
  background: Background[];
  employees: Employees;

  constructor(private postsService: PostsService){

    this.postsService.getPosts().subscribe(employees => this.employees = employees.Employees
  );

  this.postsService.getBG().subscribe(background => {
      this.background = [background.BackGround];
  });
 }
}

interface Employees{
    Employee: Employee[];
}

 interface Employee{
     IDCard: IdCard;
 }

 interface IdCard{
    FirstName: string;
    LastName: string;
 }

 interface Background{
     Employee: Info;
     VirtusaCheck: Vcheck;
     PrattCheck: Pcheck;
 }

 interface Info{
    ID: number;
    Status: string;
    Citizenship: string;
 }

 interface Vcheck{
    Status: string;
 }

 interface Pcheck{
    Status: string;
 }
