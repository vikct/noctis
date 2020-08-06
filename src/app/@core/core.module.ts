import { NgModule, ModuleWithProviders, Optional, SkipSelf, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HttpClient,
  // HTTP_INTERCEPTORS
} from '@angular/common/http';

import { NotFoundComponent } from '../@theme/components/not-found.component';
import { throwIfAlreadyLoaded } from './helpers/module-import.guard';
import { TranslocoRootModule } from './transferendum/transloco-root.module';

const SERVICES = [

];

const MODULES = [
  CommonModule,
  RouterModule,
  HttpClientModule,
  TranslocoRootModule,
];

// const INTERCEPTORS = [
//   {
//     provide: HTTP_INTERCEPTORS,
//     useClass: "",
//     multi: true
//   }
// ];

@NgModule({
  declarations: [
    NotFoundComponent
  ],
  imports: [...MODULES],
  exports: [
    // FlexLayoutModule
  ]
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
      ]
    };
  }
}
