import { TestBed } from '@angular/core/testing';

import { SidebarPropertyService } from './sidebar-property.service';

describe('SidebarPropertyService', () => {
  let service: SidebarPropertyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SidebarPropertyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
