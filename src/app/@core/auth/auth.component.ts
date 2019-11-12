import { Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  template: `
    <div
      fxLayout="row"
      fxFill
      fxLayoutAlign="space-around center"
      >
      <div fxFlex="95%">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styles: [`
    .auth-container {

    }
  `]
})
export class AuthComponent { }
