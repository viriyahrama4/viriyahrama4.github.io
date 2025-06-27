import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarCompensationComponent } from './sidebar-compensation.component';

describe('SidebarCompensationComponent', () => {
  let component: SidebarCompensationComponent;
  let fixture: ComponentFixture<SidebarCompensationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarCompensationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarCompensationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
