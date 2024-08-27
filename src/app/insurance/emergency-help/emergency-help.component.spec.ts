import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmergencyHelpComponent } from './emergency-help.component';

describe('EmergencyHelpComponent', () => {
  let component: EmergencyHelpComponent;
  let fixture: ComponentFixture<EmergencyHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmergencyHelpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmergencyHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
