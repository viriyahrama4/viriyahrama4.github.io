import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Type2PlusComponent } from './type2-plus.component';

describe('Type2PlusComponent', () => {
  let component: Type2PlusComponent;
  let fixture: ComponentFixture<Type2PlusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Type2PlusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Type2PlusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
