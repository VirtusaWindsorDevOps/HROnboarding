import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import { EmployeeComponent }  from './EmployeeView.component';
import {UserComponent} from './components/user.component';
import {LaptopComponent} from './components/laptop.component';
import {BackgroundComponent} from './components/background.component';
import {NavbarComponent} from './components/navbar.component';
import {EmpReceiveComponent} from './components/empReceive.component';
import {EmpLaptopComponent} from './components/empLaptop.component';
import {EmpBackgroundComponent} from './components/empBackground.component';
import {EmpNavbarComponent} from './components/empNavbar.component';
import {ScreenComponent} from './components/screen.component';
import {routing} from './app.routing';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, routing ],
  exports:      [ NavbarComponent, EmployeeComponent, UserComponent, LaptopComponent, BackgroundComponent, EmpReceiveComponent, ScreenComponent, EmpLaptopComponent,EmpBackgroundComponent,EmpNavbarComponent ],
  declarations: [ NavbarComponent, EmployeeComponent, UserComponent, LaptopComponent, BackgroundComponent, EmpReceiveComponent, ScreenComponent, EmpLaptopComponent,EmpBackgroundComponent,EmpNavbarComponent ],
  bootstrap:    [ EmployeeComponent ]
})
export class EmployeeModule { }

