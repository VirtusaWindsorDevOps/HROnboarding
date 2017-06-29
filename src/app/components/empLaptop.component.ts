import {Component, Input} from '@angular/core';
import {Response} from '@angular/http';
import { ActivatedRoute, Params} from '@angular/router';
import {PostsService} from '../Services/posts.service';
import {Observable} from 'rxjs/Rx';
import {EmployeeListAlt} from '../models/altEmployees.model';
import {EmpNavbarComponent} from './empNavbar.component';

@Component({
    moduleId: module.id,
    selector: 'empLap',
    providers: [PostsService],
    templateUrl: 'empLaptop.component.html',
    styleUrls: ['./navbar.component.css']
})
export class EmpLaptopComponent{

    @Input() employee: EmployeeListAlt = null;

}