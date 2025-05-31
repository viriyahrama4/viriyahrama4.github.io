import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Type1PayliteComponent } from './type1-paylite.component';

describe('Type1PayliteComponent', () => {
  let component: Type1PayliteComponent;
  let fixture: ComponentFixture<Type1PayliteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Type1PayliteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Type1PayliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
