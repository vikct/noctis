import { NgModule, ModuleWithProviders, Optional, SkipSelf, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HttpClient,
  // HTTP_INTERCEPTORS
} from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NotFoundComponent } from '../@theme/components/not-found.component';
import { throwIfAlreadyLoaded } from './helpers/module-import.guard';
import { httpLoader } from './helpers/http-loader';
import { TranslocoRootModule } from './transloco-root.module';
// import { TRANSLOCO_CONFIG, TranslocoConfig, TranslocoModule } from '@ngneat/transloco';

const SERVICES = [
  httpLoader,
  // {
  //   provide: TRANSLOCO_CONFIG,
  //   useValue: {
  //     availableLangs: ['en-US', 'zh-CN'],
  //     reRenderOnLangChange: true,
  //     fallbackLang: 'zh-CN',
  //     defaultLang: 'en-US'
  //   } as TranslocoConfig
  // }
];

const MODULES = [
  CommonModule,
  RouterModule,
  HttpClientModule,
  FlexLayoutModule,
  // TranslocoModule
  TranslocoRootModule
];

// const INTERCEPTORS = [
//   {
//     provide: HTTP_INTERCEPTORS,
//     useClass: "",
//     multi: true
//   }
// ];

// export function TransferendumServiceFactory(transferendumService: TransferendumService) {
//   return () => transferendumService.load();
// }

@NgModule({
  declarations: [
    NotFoundComponent
  ],
  imports: [
    ...MODULES
  ],
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
