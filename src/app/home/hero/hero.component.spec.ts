import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildHome1Component } from './child-home1.component';

describe('ChildHome1Component', () => {
  let component: ChildHome1Component;
  let fixture: ComponentFixture<ChildHome1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildHome1Component]
    });
    fixture = TestBed.createComponent(ChildHome1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
