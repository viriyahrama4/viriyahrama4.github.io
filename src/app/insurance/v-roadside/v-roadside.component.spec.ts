import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VRoadsideComponent } from './v-roadside.component';

describe('VRoadsideComponent', () => {
  let component: VRoadsideComponent;
  let fixture: ComponentFixture<VRoadsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VRoadsideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VRoadsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
