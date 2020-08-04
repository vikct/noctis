import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardMaterialModule } from './dashboard-material.module';
import { DashboardOutletDirective } from './dashboard-outlet.directive';
import { Covid19Component } from './covid19/covid19.component';


@NgModule({
  declarations: [
    DashboardComponent,
    DashboardOutletDirective,
    Covid19Component
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    DashboardMaterialModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule { }
