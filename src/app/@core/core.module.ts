import { NgModule, ModuleWithProviders,Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {  HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { NotFoundComponent } from './components/not-found/not-found.component';
import { throwIfAlreadyLoaded } from './helpers/module-import.guard';

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
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        ...SERVICES,
        ...INTERCEPTORS
      ]
    } as ModuleWithProviders;
  }
}
