import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Type2PlusGoodDriveComponent } from './type2-plus-good-drive.component';

describe('Type2PlusGoodDriveComponent', () => {
  let component: Type2PlusGoodDriveComponent;
  let fixture: ComponentFixture<Type2PlusGoodDriveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Type2PlusGoodDriveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Type2PlusGoodDriveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
