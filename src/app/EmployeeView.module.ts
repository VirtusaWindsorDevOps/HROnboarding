import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import { EmployeeComponent }  from './EmployeeView.component';
import {UserComponent} from './components/user.component';
import {LaptopComponent} from './components/laptop.component';
import {BackgroundComponent} from './components/background.component';
import {NavbarComponent} from './components/navbar.component';
import {routing} from './app.routing';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, routing ],
  exports:      [ NavbarComponent, EmployeeComponent, UserComponent, LaptopComponent, BackgroundComponent ],
  declarations: [ NavbarComponent, EmployeeComponent, UserComponent, LaptopComponent, BackgroundComponent ],
  bootstrap:    [ EmployeeComponent ]
})
export class EmployeeModule { }

