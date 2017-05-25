import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {UserComponent} from './components/user.component';
import {LaptopComponent} from './components/laptop.component';
import {BackgroundComponent} from './components/background.component';

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
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);