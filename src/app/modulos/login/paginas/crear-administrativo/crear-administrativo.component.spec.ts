import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearAdministrativoComponent } from './crear-administrativo.component';

describe('CrearAdministrativoComponent', () => {
  let component: CrearAdministrativoComponent;
  let fixture: ComponentFixture<CrearAdministrativoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearAdministrativoComponent]
    });
    fixture = TestBed.createComponent(CrearAdministrativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
