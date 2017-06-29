import {Component, Input} from '@angular/core';
import {Response} from '@angular/http';
import { ActivatedRoute, Params} from '@angular/router';
import {PostsService} from '../Services/posts.service';
import {Observable} from 'rxjs/Rx';
import {EmployeeListAlt} from '../models/altEmployees.model';
@Component({
    moduleId: module.id,
    selector: 'empNavbar',
    templateUrl:'empNavbar.component.html',
})
export class EmpNavbarComponent{
    isIn = false;   // store state
    @Input() employee: EmployeeListAlt = null;
    toggleState() { // click handler
        let bool = this.isIn;
        this.isIn = bool === false ? true : false; 
    }//add @Imput and @Output for the employee object
    
}