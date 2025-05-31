import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VMortorComponent } from './v-mortor.component';

describe('VMortorComponent', () => {
  let component: VMortorComponent;
  let fixture: ComponentFixture<VMortorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VMortorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VMortorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
