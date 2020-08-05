import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Covid19Component } from './covid19/covid19.component';

const routes: Routes = [
  {
    path: '',
    component: Covid19Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
