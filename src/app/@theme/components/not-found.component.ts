import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `
    <div
      fxLayout="row"
      fxFill
      fxLayoutAlign="center center"
    >
      <div fxFlex="55%">
        <h1>Error :(</h1>
        <br/>
        <p>That's awful, the page you are looking for doesn't exist.</p>
      </div>
    </div>
  `,
  // styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
