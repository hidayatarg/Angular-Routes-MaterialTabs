import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateComponent2Component } from './update-component2.component';

describe('UpdateComponent2Component', () => {
  let component: UpdateComponent2Component;
  let fixture: ComponentFixture<UpdateComponent2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateComponent2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateComponent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
