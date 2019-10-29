import { NgModule, ModuleWithProviders,Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {  HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { NotFoundComponent } from './components/not-found/not-found.component';

const COMPONENTS = [];

const SERVICES = [];

const INTERCEPTORS = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: "",
    multi: true
  }
];

@NgModule({
  declarations: [
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    
  }
}
