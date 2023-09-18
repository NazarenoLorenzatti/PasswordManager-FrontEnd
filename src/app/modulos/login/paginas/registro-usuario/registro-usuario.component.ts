import { Component, OnInit, inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/modulos/template/servicios/login/login.service';
import { UsuarioService } from 'src/app/modulos/template/servicios/usuario/usuario.service';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent implements OnInit{
  registerForm!: FormGroup;
  private router = inject(Router);
  private fb = inject(FormBuilder);  
  private usuarioService = inject(UsuarioService);
  private loginService = inject(LoginService);


  ngOnInit(): void {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, { validator: this.passwordMatchValidator });

    this?.registerForm.get('confirmPassword')?.valueChanges.subscribe(value => {
      if (value !== this.registerForm.get('password')?.value) {
        this.registerForm.setErrors({ passwordMismatch: true });
      } else {
        this.registerForm.setErrors(null);
      }
    });
  }

  passwordMatchValidator: ValidatorFn = (control: AbstractControl): { [key: string]: any } | null => {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');

    return password && confirmPassword && password.value !== confirmPassword.value
      ? { passwordMismatch: true }
      : null;
  }

  onSubmit() {
    let datosBody = {
      username: this.registerForm.get('username')?.value,
      password: this.registerForm.get('confirmPassword')?.value,
      roles: [ { idRol: 1 } ],
    }
    this.usuarioService.guardarUsuario(datosBody).subscribe(
      (data: any) => { 
      
        if(data.metadata[0].codigo == "00"){         
          localStorage.setItem('user', data.usuarioResponse.usuario[0].username);
          let datosBody = {
            username: data.usuarioResponse.usuario[0].username,
            pin: data.usuarioResponse.usuario[0].pin,
          }
       
          this.loginService.segundoFactor(datosBody).subscribe(
            (data: any) => {
              const token = data.jwtResponse.jwt[0].token;
              const fechaExpiracion = data.jwtResponse.jwt[0].expires;      
              localStorage.setItem('expires', fechaExpiracion);
              localStorage.setItem('token', token);   
            
              this.router.navigate(['/guardar-administrativo']);
            },
            (error: any) => {
              console.log("Error", error);
            }
          );
        }
      },
      (error: any) => {
        console.log("Error", error);
      }
    );
  }
}
