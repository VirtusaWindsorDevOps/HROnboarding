import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import 'hammerjs';

import { routing } from "app/Routing/routing.service";


//Components
import { AppComponent } from './app.component';
import { LoginComponent } from 'app/Components/LoginComponent/login.component';
import { SMSValComponent } from "app/Components/SMSComponent/smsvalidate.component";
import { EmployeeMenuComponent } from "app/Components/EmployeeMenuComponent/employeemenu.component";


@NgModule({
  declarations: [
    AppComponent,
	LoginComponent,
    SMSValComponent,
	EmployeeMenuComponent
  ],
  imports: [
    BrowserModule,
	BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
