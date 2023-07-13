import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoneComponent } from './bone.component';

describe('BoneComponent', () => {
  let component: BoneComponent;
  let fixture: ComponentFixture<BoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
