import { NgModule, ModuleWithProviders, Optional, SkipSelf, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HttpClient,
  // HTTP_INTERCEPTORS
} from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
// import { TransferendumService } from './services/transferendum.service';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { throwIfAlreadyLoaded } from './helpers/module-import.guard';

// const SERVICES = [
//   {
//     provide: APP_INITIALIZER,
//     useFactory: TransferendumServiceFactory,
//     deps: [TransferendumService],
//     multi: true
//   }
// ];

const MODULES = [
  CommonModule,
  RouterModule,
  HttpClientModule,
  FlexLayoutModule,
  TranslateModule.forRoot({
    loader: {
      provide: TranslateLoader,
      useFactory: HttpLoaderFactory,
      deps: [HttpClient]
    },
    isolate: false
  })
];

// const INTERCEPTORS = [
//   {
//     provide: HTTP_INTERCEPTORS,
//     useClass: "",
//     multi: true
//   }
// ];

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, '../assets/i18n/', '.json');
}

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
    TranslateModule
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
        // ...SERVICES,
      ]
    };
  }
}
