import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders,Component} from '@angular/core';
import {LandingComponent} from './component/landing.component';

export const routes: Routes =[
{
    path:'',
    component : LandingComponent
}
]


export const landingRouter  = RouterModule.forChild(routes);










