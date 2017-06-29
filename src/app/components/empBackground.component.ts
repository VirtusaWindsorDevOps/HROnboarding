import {Component, Input} from '@angular/core';
import {Response} from '@angular/http';
import { ActivatedRoute, Params} from '@angular/router';
import {PostsService} from '../Services/posts.service';
import {Observable} from 'rxjs/Rx';
import {BackgroundListAlt} from '../models/altBackgrounds.model';
import {EmpNavbarComponent} from './empNavbar.component';

@Component({
    moduleId: module.id,
    selector: 'empBG',
    providers: [PostsService],
    templateUrl: 'empBackground.component.html',
    styleUrls: ['./navbar.component.css']
})
export class EmpBackgroundComponent{

    background: BackgroundListAlt = null;
    private displayId: number = this.ngOnInit();

    constructor(private route: ActivatedRoute, private postsService: PostsService){
        this.postsService.getOneBackground(this.displayId).subscribe(background => {
            console.log(";lakbv;vabnvrau");
            console.log(background[0]);
            this.background = background[0];
        });
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