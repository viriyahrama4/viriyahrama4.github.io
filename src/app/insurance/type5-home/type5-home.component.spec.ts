import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Type5HomeComponent } from './type5-home.component';

describe('Type5HomeComponent', () => {
  let component: Type5HomeComponent;
  let fixture: ComponentFixture<Type5HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Type5HomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Type5HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
