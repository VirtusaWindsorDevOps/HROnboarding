import { AppComponent } from "app/app.component";
import { Routes, RouterModule } from "@angular/router";

import { Component, ModuleWithProviders } from '@angular/core';

//Components
import { LoginComponent } from 'app/Components/LoginComponent/login.component';
import { SMSValComponent } from "app/Components/SMSComponent/smsvalidate.component";
import { EmployeeMenuComponent } from "app/Components/EmployeeMenuComponent/employeemenu.component";


const appRoutes: Routes = [

    {
        //Going to be used to re-direct to screen 1 upon loading the site.
        path: '',
        component: AppComponent
    },
    
    {
        //Screen 1:  General User Login
        path: 'login',
        component: LoginComponent
    },
    
    {
        //Screen 2:  SMS Validation Component
        path: 'sms-validate',
        component: SMSValComponent
    },

    {
        //Screen 3: Employee Menu Screen Component
        path: 'employee-menu',
        component: EmployeeMenuComponent
    }




];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);