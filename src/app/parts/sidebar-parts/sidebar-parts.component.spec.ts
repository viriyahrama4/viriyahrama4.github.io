import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarPartsComponent } from './sidebar-parts.component';

describe('SidebarPartsComponent', () => {
  let component: SidebarPartsComponent;
  let fixture: ComponentFixture<SidebarPartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarPartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
