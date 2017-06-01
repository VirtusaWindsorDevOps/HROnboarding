import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {routing} from './app.routing';
import {EmployeeModule} from './EmployeeView.module';

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, EmployeeModule, routing ],
  declarations: [ AppComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }