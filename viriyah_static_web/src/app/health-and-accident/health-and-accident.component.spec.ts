import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthAndAccidentComponent } from './health-and-accident.component';

describe('HealthAndAccidentComponent', () => {
  let component: HealthAndAccidentComponent;
  let fixture: ComponentFixture<HealthAndAccidentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthAndAccidentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HealthAndAccidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
