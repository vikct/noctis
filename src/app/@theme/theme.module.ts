import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TRANSLOCO_SCOPE, TranslocoModule } from '@ngneat/transloco';

import { ThemeComponent } from './theme.component';
import { TransferendumComponent } from '../@core/transferendum/transferendum.component';
import { ThemeMaterialModule } from './theme-material.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    ThemeComponent,
    TransferendumComponent,
    SidebarComponent,
    // LayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    ThemeMaterialModule,
    TranslocoModule
  ],
  exports: [
    ThemeComponent,
  ]
})
export class ThemeModule {
  static forRoot(): ModuleWithProviders<ThemeModule> {
    return {
      ngModule: ThemeModule,
      providers: [
        {
          provide: TRANSLOCO_SCOPE,
          useValue: ''
        }
      ]
    };
  }
}
