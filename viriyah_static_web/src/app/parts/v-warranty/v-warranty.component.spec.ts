import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VWarrantyComponent } from './v-warranty.component';

describe('VWarrantyComponent', () => {
  let component: VWarrantyComponent;
  let fixture: ComponentFixture<VWarrantyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VWarrantyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VWarrantyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
