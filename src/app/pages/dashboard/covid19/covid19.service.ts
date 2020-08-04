import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country, Documentation } from './interfaces/covid19.interface';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class Covid19Service {

  constructor(private http: HttpClient) { }

  getDocumentation() {
    return this.http.get<Documentation[]>('https://api.covid19api.com');
  }

  getCountries() {
    return this.http.get<Country[]>('https://api.covid19api.com/countries');
  }
}
