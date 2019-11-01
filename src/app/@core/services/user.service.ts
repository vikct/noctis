// The user service contains a standard set of CRUD methods for managing users,
// it acts as the interface between the Angular application and the backend api.

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../models/user.model';

import { environment } from 'src/environments/environment';

const CONTROLLER = '/user';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  // getAll(): Observable<any> {
  //   return this.http.get<User[]>(`${environment.apiUrl}/user`);
  // }

  getAll() {
    return this.http.get<User[]>(`${environment.apiUrl} + ${CONTROLLER}`);
  }

  getById(id: number) {
    return this.http.get(`${environment.apiUrl} + ${CONTROLLER} + /` + id);
  }

  register(user: User) {
    return this.http.post(`${environment.apiUrl} + ${CONTROLLER}/create`, user);
  }

  update(user: User) {
    return this.http.put(`${environment.apiUrl} + ${CONTROLLER}/` + user.userId, user);
  }

  delete(user: User) {
    // return this.http.put(`${environment.apiUrl}/user/delete`, id);
    // REMARK: Deleting data is a bad practice, all records should remain intact
    // in database for reference and recovery purpose
    return this.http.put(`${environment.apiUrl} + ${CONTROLLER}/delete` + user.userId, user);
  }

  hardDelete(id: number) {
    // return this.http.put(`${environment.apiUrl}/user/delete`, id);
    // REMARK: Deleting data is a bad practice, all records should remain intact
    // in database for reference and recovery purpose
    return this.http.delete(`${environment.apiUrl} + ${CONTROLLER}/` + id);
  }
}
