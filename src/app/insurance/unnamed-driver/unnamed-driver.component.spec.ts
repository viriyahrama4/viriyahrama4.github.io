import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnnamedDriverComponent } from './unnamed-driver.component';

describe('UnnamedDriverComponent', () => {
  let component: UnnamedDriverComponent;
  let fixture: ComponentFixture<UnnamedDriverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnnamedDriverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnnamedDriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
