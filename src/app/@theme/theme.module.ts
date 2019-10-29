import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeComponent } from './theme.component';

import { LayoutComponent } from './layout';

@NgModule({
  declarations: [
    ThemeComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ThemeComponent
  ]
})
export class ThemeModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ThemeModule,
      providers: [

      ]
    } as ModuleWithProviders;
  }
}
