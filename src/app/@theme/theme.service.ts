import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private _tenebrae: Subject<boolean> = new Subject<boolean>();
  isThemeLight = this._tenebrae.asObservable();

  setLightTheme(isThemeLight: boolean) {
    this._tenebrae.next(isThemeLight);
  }
  constructor() { }
}
