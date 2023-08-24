import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponente } from './login-componente.component';

describe('LoginComponente', () => {
  let component: LoginComponente;
  let fixture: ComponentFixture<LoginComponente>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponente]
    });
    fixture = TestBed.createComponent(LoginComponente);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
