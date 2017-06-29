import {Component} from '@angular/core';
import {Response} from '@angular/http';
import { ActivatedRoute, Params, Router} from '@angular/router';
import {PostsService} from '../Services/posts.service';
import {Observable} from 'rxjs/Rx';
import {EmployeeListAlt} from '../models/altEmployees.model';

@Component({
    moduleId: module.id,
    selector: 'screen',
    template: '<emp [employee]=employee[0]></emp>',
    providers: [PostsService],
})
export class ScreenComponent{

    employee: EmployeeListAlt;
    displayId: number = this.ngOnInit();

    constructor(private route: ActivatedRoute, private postsService: PostsService, private router: Router){

        this.postsService.getOneEmployee(this.displayId).subscribe(employee => {
            this.employee = employee;
            this.screen(this.employee);
        });

    }

    screen(employee: EmployeeListAlt){
        console.log(employee[0].Employee.IDCard.Role);
         if(employee[0].Employee.IDCard.Role == "Manager"){
            this.router.navigate(['/']);
        }else{
            this.router.navigate(['/employee/'+ employee[0].Employee.IDCard.ID]);
        }
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