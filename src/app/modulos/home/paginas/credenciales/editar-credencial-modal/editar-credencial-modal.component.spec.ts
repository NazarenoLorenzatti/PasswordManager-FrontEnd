import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarCredencialModalComponent } from './editar-credencial-modal.component';

describe('EditarCredencialModalComponent', () => {
  let component: EditarCredencialModalComponent;
  let fixture: ComponentFixture<EditarCredencialModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarCredencialModalComponent]
    });
    fixture = TestBed.createComponent(EditarCredencialModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
