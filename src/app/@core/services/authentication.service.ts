import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// import { environment } from '../../../../environment';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';

const CONTROLLER = '/authentication';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private userSubject: BehaviorSubject<User>;
  public user: Observable<User>;

  constructor(private http: HttpClient) {
    this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.user = this.userSubject.asObservable();
  }

  public get userValue(): User {
    return this.userSubject.value;
  }

  // isLoggedIn(): Observable<boolean> {
  //   if (this.currentUser) {
  //     return true;
  //   }
  // }

  login(username: string, password: string) {
    return this.http
      .post<any>(
        `${environment.apiUrl + CONTROLLER}`,
        { username, password }
      )
      .pipe(map(user => {
        // store user details and jwt token in local storage
        // to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.userSubject.next(user);
        return user;
      }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.userSubject.next(null);
  }
}
