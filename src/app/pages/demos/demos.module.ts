import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { DemosRoutingModule } from './demos-routing.module';
import { DemosComponent } from './demos.component';

import { DemosMaterialModule } from './demos-material.module';
import { FormInputComponent } from './form-input/form-input.component';
import { TreePipe } from './form-input/tree.pipe';
import { CheckChildrenDirective } from './form-input/check-children.directive';
import { SelectGroupDirective } from './form-input/select-group.directive';


@NgModule({
  declarations: [
    DemosComponent,
    FormInputComponent,
    TreePipe,
    CheckChildrenDirective,
    SelectGroupDirective
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DemosRoutingModule,
    DemosMaterialModule
  ]
})
export class DemosModule { }
