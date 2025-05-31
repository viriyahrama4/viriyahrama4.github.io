import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarInsuranceComponent } from './sidebar-insurance.component';

describe('SidebarInsuranceComponent', () => {
  let component: SidebarInsuranceComponent;
  let fixture: ComponentFixture<SidebarInsuranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarInsuranceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
