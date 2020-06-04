import {
  NgModule,
  ModuleWithProviders,
  Optional,
  SkipSelf
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  HttpClientModule,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

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
    HttpClientModule,
    FlexLayoutModule
  ],
  // exports: [
  //   FlexLayoutModule
  // ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }

  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        ...SERVICES,
        // ...INTERCEPTORS
      ]
    } as ModuleWithProviders;
  }
}
