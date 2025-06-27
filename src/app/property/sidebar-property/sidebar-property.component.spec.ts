import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarPropertyComponent } from './sidebar-property.component';

describe('SidebarPropertyComponent', () => {
  let component: SidebarPropertyComponent;
  let fixture: ComponentFixture<SidebarPropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarPropertyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
