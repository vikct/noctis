import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss']
})
export class FormInputComponent implements OnInit {

  constructor() { }

  items = [
    { name: 'One', id: 1, group: 'A' },
    { name: 'Two', id: 2, group: 'A' },
    { name: 'Three', id: 3, group: 'A' },
    { name: 'Four', id: 4, group: 'B' },
    { name: 'Five', id: 5, group: 'B' },
    { name: 'Six', id: 6, group: 'B' },
  ]

  form = new FormGroup({
    items: new FormArray([])
  });

  get control() {
    return this.form.get('items') as FormArray;
  }

  ngOnInit(): void {
    this.items.forEach(() => this.control.push(new FormControl()));
  }

}
