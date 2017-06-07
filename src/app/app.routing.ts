import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {UserComponent} from './components/user.component';
import {LaptopComponent} from './components/laptop.component';
import {BackgroundComponent} from './components/background.component';
import {EmpReceiveComponent} from './components/empReceive.component';

const appRoutes: Routes = [
    {
        path:'',
        component: UserComponent
    },
    {
        path:'laptop',
        component: LaptopComponent
    },
    {
        path:'background',
        component: BackgroundComponent
    },
    {
        path:'test/:id',
        component: EmpReceiveComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);