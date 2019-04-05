import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateComponent1Component } from './update-component1.component';

describe('UpdateComponent1Component', () => {
  let component: UpdateComponent1Component;
  let fixture: ComponentFixture<UpdateComponent1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateComponent1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateComponent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
