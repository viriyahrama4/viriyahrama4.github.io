import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Type4Component } from './type4.component';

describe('Type4Component', () => {
  let component: Type4Component;
  let fixture: ComponentFixture<Type4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Type4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Type4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
