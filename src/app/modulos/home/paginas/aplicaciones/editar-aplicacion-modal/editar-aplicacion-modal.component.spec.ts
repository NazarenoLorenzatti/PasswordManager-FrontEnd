import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarAplicacionModalComponent } from './editar-aplicacion-modal.component';

describe('EditarAplicacionModalComponent', () => {
  let component: EditarAplicacionModalComponent;
  let fixture: ComponentFixture<EditarAplicacionModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarAplicacionModalComponent]
    });
    fixture = TestBed.createComponent(EditarAplicacionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
