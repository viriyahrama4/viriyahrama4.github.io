import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompensationContactComponent } from './compensation-contact.component';

describe('CompensationContactComponent', () => {
  let component: CompensationContactComponent;
  let fixture: ComponentFixture<CompensationContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompensationContactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompensationContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
