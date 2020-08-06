import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {  interval, timer } from 'rxjs';
import { flatMap, groupBy, map } from 'rxjs/operators';

import { Covid19Service } from './covid19.service';
import { Documentation, Country, CountryStatus } from './interfaces/covid19.interface';

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
    console.log('change country');
    this.covid19Service.countryDayOneRoute(country).subscribe(cases => {
      this.cases = cases;
      this.setOptions();
    });
  }

  setOptions() {
    this.countryCasesChartOptions = {
      title: {
        text: 'COVID-19 STATUS CHART',
      },
      legend: {
        data: ['Confirmed', 'Recovered', 'Deaths']
      },
      tooltip: {
      },
      xAxis: {
        data: this.cases.map(c => new Date(c.Date).toLocaleDateString()),
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        name: 'Confirmed',
        type: 'line',
        data: this.cases.map(c => c.Confirmed),
      },
      {
        name: 'Recovered',
        type: 'line',
        data: this.cases.map(c => c.Recovered),
      },
      {
        name: 'Deaths',
        type: 'line',
        data: this.cases.map(c => c.Deaths),
      },
      ]
    };
  }

  ngOnInit(): void {
    this.getCountries();
    this.getDocumentation();
  }

}
