import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/modulos/template/servicios/login/login.service';

@Component({
  selector: 'app-autenticacion',
  templateUrl: './autenticacion.component.html',
  styleUrls: ['./autenticacion.component.css']
})
export class AutenticacionComponent {


  loginForm!: FormGroup;
  private fb = inject(FormBuilder);
  private loginService = inject(LoginService);
  private router = inject(Router);
  public aviso = inject(MatSnackBar);
  public user!: string | null;

  constructor() { }

  ngOnInit(): void {
    this.user = localStorage.getItem('user');
    this.loginForm = this.fb.group({
      username: [{value: this.user, disabled: true}],
      pin: ['', Validators.required],
    });
  }

  onSubmit() {

    let datosBody = {
      username: this.loginForm.get('username')?.value,
      pin: this.loginForm.get('pin')?.value,
    }

    this.loginService.segundoFactor(datosBody).subscribe(
      (data: any) => {
        const token = data.jwtResponse.jwt[0].token;
        const fechaExpiracion = data.jwtResponse.jwt[0].expires;

        localStorage.setItem('expires', fechaExpiracion);
        localStorage.setItem('token', token);

        this.router.navigate(['/home']);
      },
      (error: any) => {
        console.log("Error", error);
      }
    );
  }
}
