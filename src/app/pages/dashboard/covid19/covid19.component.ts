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
  dummy = [
    { name: "Mobiles", value: 105000 },
    { name: "Laptop", value: 55000 },
    { name: "AC", value: 15000 },
    { name: "Headset", value: 150000 },
    { name: "Fridge", value: 20000 }
  ];

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
      // this.setOptions();
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

  setOptions(list: CountrySummary[]) {

    // this.countryCasesChartOptions = {
    //   name: this.countrySummary.map(i => i.Country),
    //   value: this.countrySummary.map(i => i.)
    // }
  }

  getCountrySummary(country: string) {
    // console.log(country);
    return this.covid19Service
              .summaryRoute()
              .pipe(
                map(data =>
                  this.countrySummary = data.Countries
                    .filter(filter =>
                      filter.Slug == country
                    ),
                )
              )
              .subscribe(result =>
                console.log("result", result)
                // this.test = [
                //   {
                //     name: 'NewConfirmed',
                //     value: result.map(i=>i.NewConfirmed)
                //   },
                //   {
                //     name: 'NewDeaths',
                //     value: result.map(i=>i.NewDeaths)
                //   },
                //   {
                //     name: 'NewRecovered',
                //     value: result.map(i=>i.NewRecovered)
                //   },
                //   {
                //     name: 'TotalConfirmed',
                //     value: result.map(i=>i.TotalConfirmed)
                //   },
                //   {
                //     name: 'TotalDeaths',
                //     value: result.map(i=>i.TotalDeaths)
                //   },
                //   {
                //     name: 'TotalRecovered',
                //     value: result.map(i=>i.TotalRecovered)
                //   }
                // ]
              )
  }
//   Country: "Malaysia"
// CountryCode: "MY"
// Date: "2020-08-06T07:20:24Z"
// NewConfirmed: 21
// NewDeaths: 0
// NewRecovered: 18
// Premium: {}
// Slug: "malaysia"
// TotalConfirmed: 9023
// TotalDeaths: 125
// TotalRecovered: 8702

  ngOnInit(): void {
    this.getCountries();
    this.getDocumentation();
    this.getCountrySummary(this.selectedCountry);
  }

}
