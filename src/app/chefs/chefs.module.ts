import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChefsRoutingModule } from './chefs-routing.module';
import { ChefsComponent } from './components/chefs/chefs.component';


@NgModule({
  declarations: [
    ChefsComponent
  ],
  imports: [
    CommonModule,
    ChefsRoutingModule
  ]
})
export class ChefsModule { }
