import { Routes, RouterModule } from '@angular/router';
import { HeaderFooterComponent } from './shared/header-footer/header-footer.component';
import { NgModule } from '@angular/core';

export const routers: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },

  {
    path: 'home',
    // component:HeaderFooterComponent,
    loadChildren: 'app/pages/landing/landing.module#LandingModule'
  }

]

export const appRouter = RouterModule.forRoot(routers);
