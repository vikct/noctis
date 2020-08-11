import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Documentation, Country, CountryStatus } from './interfaces/covid19.interface';

const BASE_URL = 'https://api.covid19api.com';

@Injectable({
  providedIn: 'root'
})
export class Covid19Service {

  constructor(private http: HttpClient) { }

  // Documentations
  allRoute() {
    return this.http.get<Documentation[]>(BASE_URL);
  }

  // Countries
  countriesRoute() {
    return this.http.get<Country[]>(`${BASE_URL}/countries`);
  }

  countryDayOneRoute(country: string) {
    return this.http.get<CountryStatus[]>(`${BASE_URL}/dayone/country/${country}`);
  }

  summaryRoute() {
    return this.http.get<any>(`${BASE_URL}/summary`);
  }
}
