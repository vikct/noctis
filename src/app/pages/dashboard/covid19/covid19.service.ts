import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country, Documentation } from './interfaces/covid19.interface';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class Covid19Service {

  url: string = 'https://api.covid19api.com';

  constructor(private http: HttpClient) { }

  // Documentations
  allRoute() {
    return this.http.get<Documentation[]>(this.url);
  }

  // Countries
  countriesRoute() {
    return this.http.get<Country[]>(`${this.url}/countries`);
  }

  countryDayOneRoute(country: string) {
    return this.http.get<any>(`${this.url}/dayone/country/${country}`);
  }
}
