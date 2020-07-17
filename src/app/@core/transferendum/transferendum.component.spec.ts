import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferendumComponent } from './transferendum.component';

describe('TransferendumComponent', () => {
  let component: TransferendumComponent;
  let fixture: ComponentFixture<TransferendumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferendumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferendumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
