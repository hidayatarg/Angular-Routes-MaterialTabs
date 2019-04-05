import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent2Component } from './list-component2.component';

describe('ListComponent2Component', () => {
  let component: ListComponent2Component;
  let fixture: ComponentFixture<ListComponent2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListComponent2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
