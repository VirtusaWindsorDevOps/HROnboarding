import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {UserComponent} from './components/user.component';
import {LaptopComponent} from './components/laptop.component';
import {BackgroundComponent} from './components/background.component';
import {EmpReceiveComponent} from './components/empReceive.component';
import {ScreenComponent} from './components/screen.component';
import {EmpLaptopComponent} from './components/empLaptop.component';
import {EmpBackgroundComponent} from './components/empBackground.component';

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
        path: 'screen/:id',
        component: ScreenComponent
    },
    {
        path:'employee/:id',
        component: EmpReceiveComponent
    },
    {
        path: 'empLaptop/:id',
        component: EmpLaptopComponent
    },
    {
        path: 'empBackground/:id',
        component: EmpBackgroundComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);