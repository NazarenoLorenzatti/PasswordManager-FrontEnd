import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaAplicacionModalComponent } from './NuevaAplicacionModalComponent';

describe('NuevaAplicacionModalComponent', () => {
  let component: NuevaAplicacionModalComponent;
  let fixture: ComponentFixture<NuevaAplicacionModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NuevaAplicacionModalComponent]
    });
    fixture = TestBed.createComponent(NuevaAplicacionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
