import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {  interval, timer } from 'rxjs';
import { flatMap, groupBy, map } from 'rxjs/operators';

import { Covid19Service } from './covid19.service';
import { Country,Documentation } from './interfaces/covid19.interface';

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

  constructor(private covid19Service: Covid19Service) {

    // interval(2*60*1000)
    // timer(0, 2*60*1000)
    //   .pipe(
    //     flatMap(() => this.covid19Service.getCountries()),
    //     map(data =>
    //       data.sort((a, b) => a.Country.localeCompare(b.Country))
    //     )
    //   )
    //   // .subscribe(data => console.log(data))
    //   .subscribe(result => {
    //     this.countries = result
    //   })
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

  getValue(country: string) {
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

  ngOnInit(): void {
    this.getCountries();
    this.getDocumentation();
  }

}
