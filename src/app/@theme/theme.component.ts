import { Component, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

import { ThemeService } from './theme.service';
import { Observable } from 'rxjs';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss']
})
export class ThemeComponent implements OnInit {

  isThemeLight: Observable<boolean>;
  constructor(
    private themeService: ThemeService,
    private translocoService: TranslocoService
  ) { }

  ngOnInit() {
    this.isThemeLight = this.themeService.isThemeLight;

    // this.translocoService
    //   .selectTranslate('', {}, '')
    //   .subscribe(console.log);
  }

  toggleLightTheme(checked: boolean) {
    this.themeService.setLightTheme(checked);
  }

}
