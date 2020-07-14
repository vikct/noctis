import { Component } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-transferendum',
  template: `
    <button mat-icon-button class="matero-toolbar-button" [matMenuTriggerFor]="menu">
      <mat-icon>translate</mat-icon>
    </button>

    <mat-menu #menu="matMenu">
      <button mat-menu-item *ngFor="let lang of langs | keyvalue" (click)="useLanguage(lang.key)">
        <span>{{ lang.value }}</span>
      </button>
    </mat-menu>
  `,
  styles: [
  ]
})
export class TransferendumComponent {

  langs = {
    'en-US': 'English',
    'zh-CN': '中文简体',
    // 'zh-TW': '中文繁体',
  };

  constructor(
    // private _translate: TranslocoService
  ) { }

  useLanguage(language: string) {
    // this._translate.setActiveLang(language);
  }

}
