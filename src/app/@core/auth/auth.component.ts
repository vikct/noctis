import { Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  template: `
    <div
      class="auth-container"
      fxLayout="row"
      fxLayout.xs="column"
      fxLayoutAlign="center center"
      fxFlexFill
      >
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`
    .auth-container {
      padding: 50px;
    }
  `]
})
export class AuthComponent { }
