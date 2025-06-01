import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactPartsComponent } from './contact-parts.component';

describe('ContactPartsComponent', () => {
  let component: ContactPartsComponent;
  let fixture: ComponentFixture<ContactPartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactPartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
