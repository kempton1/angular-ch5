import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomcontrolComponent } from './roomcontrol.component';

describe('RoomcontrolComponent', () => {
  let component: RoomcontrolComponent;
  let fixture: ComponentFixture<RoomcontrolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomcontrolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomcontrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
