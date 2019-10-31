import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemosRoutingModule } from './demos-routing.module';
import { DemosComponent } from './demos.component';

import { DemosMaterialModule } from './demos-material.module';


@NgModule({
  declarations: [DemosComponent],
  imports: [
    CommonModule,
    DemosRoutingModule,
    DemosMaterialModule
  ]
})
export class DemosModule { }
