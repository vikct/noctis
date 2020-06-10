import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  imports: [],
  exports: [
    CommonModule,

    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatToolbarModule
  ],
  declarations: []
})
export class ThemeMaterialModule { }
