import { Component, OnInit, AfterViewInit } from '@angular/core';
import { SplashScreenService } from './@core/services/splash-screen.service';

@Component({
  selector: 'app-root',
  template: `
    <div class="mat-typography app-frame mat-app-background">
      <router-outlet></router-outlet>
    </div>
    `
})
export class AppComponent implements OnInit, AfterViewInit {
  constructor(private splashScreen: SplashScreenService) { }

  ngOnInit() { }

  ngAfterViewInit() {
    this.splashScreen.hide();
  }
}
