import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddComponent2Component } from './add-component2.component';

describe('AddComponent2Component', () => {
  let component: AddComponent2Component;
  let fixture: ComponentFixture<AddComponent2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddComponent2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddComponent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
