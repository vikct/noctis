import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';

@NgModule({
  exports: [
    CommonModule,
    MatCardModule
  ]
})

export class DemosMaterialModule {}
