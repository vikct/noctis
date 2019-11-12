import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';

import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const currentUser = this.authenticationService.currentUserValue;
    if (currentUser) {
      if (next.data.roles && next.data.roles.indexOf(currentUser.role) === -1) {
        this.router.navigate(['/']);
        return false;
      }

      // this.router.navigate(['/auth/login'], { queryParams: { returnUrl: state.url } });
      return true;
    }

  }

}
