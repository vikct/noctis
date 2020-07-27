import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'demos',
        loadChildren: () => import('./demos/demos.module')
          .then(m => m.DemosModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module')
          .then(m => m.DashboardModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('./settings/settings.module')
          .then(m => m.SettingsModule)
      },
      {
        path: '',
        redirectTo: 'demos',
        pathMatch: 'full',
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
