import { Component, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

import { ThemeService } from './theme.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss']
})
export class ThemeComponent implements OnInit {

  isThemeLight: Observable<boolean>;
  constructor(private themeService: ThemeService) { }

  ngOnInit() {
    this.isThemeLight = this.themeService.isThemeLight;
  }

  toggleLightTheme(checked: boolean) {
    this.themeService.setLightTheme(checked);
  }

}
