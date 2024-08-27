import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Type3PlusShortComponent } from './type3-plus-short.component';

describe('Type3PlusShortComponent', () => {
  let component: Type3PlusShortComponent;
  let fixture: ComponentFixture<Type3PlusShortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Type3PlusShortComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Type3PlusShortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
