import { Component, OnInit } from '@angular/core';
import { Track } from './models/track';

@Component({
  selector: 'app-dashboard',
  template: `
    <div class="board">
      <div *ngFor="let track of tracks">
        <div *ngFor="let item of track.items">
          <ng-template appDashboardOutlet [item]="item"></ng-template>
        </div>
      </div>
    </div>
    <p>**DASHBOARD** to be implemented</p>

  `
})
export class DashboardComponent implements OnInit {
  tracks: Array<Track> = [
    {
      items: []
    },
    {
      items: []
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
