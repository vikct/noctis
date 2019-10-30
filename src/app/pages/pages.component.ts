import { Component } from '@angular/core';

@Component({
  selector: 'app-pages',
  styleUrls: ['./pages.component.scss'],
  template: `
    <app-theme>
      <router-outlet></router-outlet>
    </app-theme>
  `
})
export class PagesComponent {

}
