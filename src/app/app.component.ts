import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="mat-typography app-frame mat-app-background">
      <router-outlet></router-outlet>
    </div>
    `
})
export class AppComponent { }
