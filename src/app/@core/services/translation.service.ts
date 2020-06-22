import { Injectable, Injector } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  constructor(
    private _injector: Injector,
    private _translate: TranslateService,
  ) { }

  load() {
    return new Promise<any>((resolve: any) => {
      // const locationInitialized = this._injector.get(LOCATION_INITIALIZED, )
    })
  }
}
