import { Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  template: `
    <div
      class="auth-container"
      >
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`
    .auth-container {
      margin: 20px;
      height:94.5vh;
    }
  `]
})
export class AuthComponent { }
