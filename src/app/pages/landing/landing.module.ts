import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';
import {landingRouter} from './landing.router';
import { SharedModule } from '../../shared/shared.module';
 
@NgModule({
  imports: [
    CommonModule,
    landingRouter,
    SharedModule
  ],
  declarations: [LandingComponent]
})
export class LandingModule { }
