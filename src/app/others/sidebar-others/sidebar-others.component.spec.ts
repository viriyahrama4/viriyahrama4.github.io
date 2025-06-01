import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarOthersComponent } from './sidebar-others.component';

describe('SidebarOthersComponent', () => {
  let component: SidebarOthersComponent;
  let fixture: ComponentFixture<SidebarOthersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarOthersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarOthersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
