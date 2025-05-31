import { TestBed } from '@angular/core/testing';

import { SidebarInsuranceService } from './sidebar-insurance.service';

describe('SidebarInsuranceService', () => {
  let service: SidebarInsuranceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SidebarInsuranceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
