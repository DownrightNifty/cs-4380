import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './about-us.component';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [
    AboutUsComponent
  ],
  exports: [
    AboutUsComponent
  ],
  imports: [
    CommonModule, RouterModule
  ]
})
export class LandingModule { }
