import { Component, OnInit } from '@angular/core';
import {  interval, timer } from 'rxjs';
import { flatMap } from 'rxjs/operators';

import { Covid19Service } from './covid19.service';

@Component({
  selector: 'app-covid19',
  templateUrl: './covid19.component.html',
  styleUrls: ['./covid19.component.scss']
})
export class Covid19Component implements OnInit {

  constructor(private covid19Service: Covid19Service) {

    // interval(2*60*1000)
    //   .pipe(
    //     flatMap(() => this.covid19Service.getCountries())
    //   )
    //   .subscribe(data => console.log(data))

    timer(0, 2*60*1000)
      .pipe(
        flatMap(() => this.covid19Service.getCountries())
      )
      .subscribe(data => console.log(data))
  }

  getDocumentation() {
    
  }

  ngOnInit(): void {
  }

}
