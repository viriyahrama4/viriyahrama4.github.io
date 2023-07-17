import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomCareComponent } from './room-care.component';

describe('RoomCareComponent', () => {
  let component: RoomCareComponent;
  let fixture: ComponentFixture<RoomCareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomCareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
