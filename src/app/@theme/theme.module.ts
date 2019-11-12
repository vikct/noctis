import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ThemeComponent } from './theme.component';
import { ThemeMaterialModule } from './theme-material.module';

@NgModule({
  declarations: [
    ThemeComponent,
    // LayoutComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    ThemeMaterialModule
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
