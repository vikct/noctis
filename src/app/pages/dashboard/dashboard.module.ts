import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
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
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
