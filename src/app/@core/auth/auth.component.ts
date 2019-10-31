import { Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  template: `
    <div class="auth-container">
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
