import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Type2PlusShortComponent } from './type2-plus-short.component';

describe('Type2PlusShortComponent', () => {
  let component: Type2PlusShortComponent;
  let fixture: ComponentFixture<Type2PlusShortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Type2PlusShortComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Type2PlusShortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
