import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {  interval, timer } from 'rxjs';
import { filter, flatMap, groupBy, map } from 'rxjs/operators';

import { Covid19Service } from './covid19.service';
import { Documentation, Country, CountryStatus, CountrySummary } from './interfaces/covid19.interface';

interface saleData {
  name: string,
  value: number
}
@Component({
  selector: 'app-covid19',
  templateUrl: './covid19.component.html',
  styleUrls: ['./covid19.component.scss']
})
export class Covid19Component implements OnInit {

  countryControl = new FormControl('', Validators.required);
  selectFormControl = new FormControl('', Validators.required);
  countries: Country[];
  docs: Documentation[];
  displayedColumns: string[] = ['Name', 'Description', 'Path'];
  dataSource = this.docs;

  selectedCountry: string;
  countryCasesChartOptions: any;
  cases: CountryStatus[] = [];
  countrySummary: CountrySummary[] = [];
  test: saleData[] = [];

  view: any[] = [1100];
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  colorScheme = {
    // domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
    domain: ['#AAAAAA', '#A10A28', '#5AA454']
  };

  constructor(private covid19Service: Covid19Service) {
    this.getCasesByCountry(this.selectedCountry);
  }

  getCountries() {
    return this.covid19Service
                .countriesRoute()
                .pipe(
                  map(data =>
                    data.sort((a, b) => a.Country.localeCompare(b.Country))
                  )
                )
                .subscribe(result => {
                  this.countries = result
                })
  }

  getDocumentation() {
    return this.covid19Service
                .allRoute()
                .subscribe(result => {
                  this.docs = result
                })
  }

  getCasesByCountry(country: string) {
    if (country) {
        // interval(2*60*1000)
      timer(0, 2*60*1000)
      .pipe(
        flatMap(() => this.covid19Service.countryDayOneRoute(country)),
        map(data =>
          data.sort((a, b) => a.Date.localeCompare(b.Date))
        )
      )
      .subscribe(data => console.log(data))
      // .subscribe(result => {
      //   this.countries = result
      // })
      }
  }

  onChangeCountry(country: string) {
    this.covid19Service.countryDayOneRoute(country).subscribe(cases => {
      this.cases = cases;
    });
  }

  // setOptions() {
  //   this.countryCasesChartOptions = {
  //     title: {
  //       text: 'COVID-19 STATUS CHART',
  //     },
  //     legend: {
  //       data: ['Confirmed', 'Recovered', 'Deaths']
  //     },
  //     tooltip: {
  //     },
  //     xAxis: {
  //       data: this.cases.map(c => new Date(c.Date).toLocaleDateString()),
  //     },
  //     yAxis: {
  //       type: 'value'
  //     },
  //     series: [{
  //       name: 'Confirmed',
  //       type: 'line',
  //       data: this.cases.map(c => c.Confirmed),
  //     },
  //     {
  //       name: 'Recovered',
  //       type: 'line',
  //       data: this.cases.map(c => c.Recovered),
  //     },
  //     {
  //       name: 'Deaths',
  //       type: 'line',
  //       data: this.cases.map(c => c.Deaths),
  //     },
  //     ]
  //   };
  // }

  setOptions(list) {
    console.log(list);
    this.test = list;
    this.test = [
      {
        name: 'New Confirmed',
        value: list.NewConfirmed
      },
      {
        name: 'New Deaths',
        value: list.NewDeaths
      },
      {
        name: 'New Recovered',
        value: list.NewRecovered
      },
      {
        name: 'Total Confirmed',
        value: list.TotalConfirmed
      },
      {
        name: 'Total Deaths',
        value: list.TotalDeaths
      },
      {
        name: 'Total Recovered',
        value: list.TotalRecovered
      }
    ]
  }

  getCountrySummary(country: string) {
    // console.log(country);
    return this.covid19Service
              .summaryRoute()
              .pipe(
                flatMap(data =>
                  this.countrySummary = data.Countries
                    .filter(filter =>
                      filter.Slug == country
                    ),
                ),
              )
              .subscribe(result =>
                this.setOptions(result)
              )
  }

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  ngOnInit(): void {
    const init = 'malaysia';
    this.getCountries();
    this.getDocumentation();
    // this.getCountrySummary(this.selectedCountry);
    this.getCountrySummary(init);
  }

}
