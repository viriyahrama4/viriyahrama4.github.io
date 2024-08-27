import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Type3PlusComponent } from './type3-plus.component';

describe('Type3PlusComponent', () => {
  let component: Type3PlusComponent;
  let fixture: ComponentFixture<Type3PlusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Type3PlusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Type3PlusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
