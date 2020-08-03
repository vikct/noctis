import { Directive, QueryList, ContentChildren, ElementRef, ContentChild } from '@angular/core';
import { NgControl } from '@angular/forms';
import { merge, Subject } from 'rxjs';
import { SelectGroupDirective } from './select-group.directive';
import { takeUntil } from 'rxjs/operators';
// import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@Directive({ selector: '[checkChildren]' })
export class CheckChildrenDirective {
  @ContentChildren(NgControl, { descendants: true }) controls: QueryList<NgControl>;
  @ContentChild(SelectGroupDirective) selectGroup: SelectGroupDirective;

  ngAfterContentInit() {
    this.selectGroup.checkChanges$.subscribe((checked) => {
      this.controls.forEach(({ control }) => control.patchValue(checked));
    });

    const changes = this.controls.map(({ control }) => control.valueChanges);

    merge(...changes).subscribe(() => {
      this.selectGroup.checked =
           this.controls.toArray().every(({ control }) => control.value);
    });
  }
}
