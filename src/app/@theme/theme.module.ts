import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ThemeComponent } from './theme.component';
import { TransferendumComponent } from './components/transferendum.component';
import { ThemeMaterialModule } from './theme-material.module';

@NgModule({
  declarations: [
    ThemeComponent,
    TransferendumComponent,
    // LayoutComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    ThemeMaterialModule
  ],
  exports: [
    // ThemeComponent
  ]
})
export class ThemeModule {
  static forRoot(): ModuleWithProviders<ThemeModule> {
    return {
      ngModule: ThemeModule,
      providers: [

      ]
    };
  }
}
