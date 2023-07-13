import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EverytimeComponent } from './everytime.component';

describe('EverytimeComponent', () => {
  let component: EverytimeComponent;
  let fixture: ComponentFixture<EverytimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EverytimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EverytimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
