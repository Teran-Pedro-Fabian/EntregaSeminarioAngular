import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionClasesComponent } from './seccion-clases.component';

describe('SeccionClasesComponent', () => {
  let component: SeccionClasesComponent;
  let fixture: ComponentFixture<SeccionClasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SeccionClasesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeccionClasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
