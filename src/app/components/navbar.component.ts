import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'navbar',
    templateUrl:'navbar.component.html',
})
export class NavbarComponent{
    isIn = false;   // store state
    toggleState() { // click handler
        let bool = this.isIn;
        this.isIn = bool === false ? true : false; 
    }
    
}