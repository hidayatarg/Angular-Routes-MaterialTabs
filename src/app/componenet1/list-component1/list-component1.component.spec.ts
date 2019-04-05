import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent1Component } from './list-component1.component';

describe('ListComponent1Component', () => {
  let component: ListComponent1Component;
  let fixture: ComponentFixture<ListComponent1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListComponent1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
