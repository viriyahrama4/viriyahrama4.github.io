import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarHealthComponent } from './sidebar-health.component';

describe('SidebarHealthComponent', () => {
  let component: SidebarHealthComponent;
  let fixture: ComponentFixture<SidebarHealthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarHealthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarHealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
