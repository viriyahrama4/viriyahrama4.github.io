import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Type2PlusDepartmentComponent } from './type2-plus-department.component';

describe('Type2PlusDepartmentComponent', () => {
  let component: Type2PlusDepartmentComponent;
  let fixture: ComponentFixture<Type2PlusDepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Type2PlusDepartmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Type2PlusDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
