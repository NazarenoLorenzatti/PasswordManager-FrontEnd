import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaCredencialModalComponent } from './nueva-credencial-modal.component';

describe('NuevaCredencialModalComponent', () => {
  let component: NuevaCredencialModalComponent;
  let fixture: ComponentFixture<NuevaCredencialModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NuevaCredencialModalComponent]
    });
    fixture = TestBed.createComponent(NuevaCredencialModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
