import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GymClassComponent } from './gym-class.component';

describe('GymClassComponent', () => {
  let component: GymClassComponent;
  let fixture: ComponentFixture<GymClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GymClassComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GymClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
