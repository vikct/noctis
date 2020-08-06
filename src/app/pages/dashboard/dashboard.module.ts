import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
// import * as echarts from 'echarts';
import { NgxEchartsModule } from 'ngx-echarts';

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
    ReactiveFormsModule,
    NgxEchartsModule.forRoot({
      /**
       * This will import all modules from echarts.
       * If you only need custom modules,
       * please refer to [Custom Build] section.
       */
      echarts: () => import('echarts'), // or import('./path-to-my-custom-echarts')
    }),
    DashboardRoutingModule,
    DashboardMaterialModule,
  ]
})
export class DashboardModule { }
