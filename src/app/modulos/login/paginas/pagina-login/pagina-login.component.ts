import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/modulos/template/servicios/login/login.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-pagina-login',
  templateUrl: './pagina-login.component.html',
  styleUrls: ['./pagina-login.component.css']
})

export class PaginaLoginComponent {

  loginForm!: FormGroup;
  private fb = inject(FormBuilder);
  private loginService = inject(LoginService);
  private router = inject(Router);
  public aviso = inject(MatSnackBar);

  constructor() { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    let datosBody = {
      username: this.loginForm.get('username')?.value,
      password: this.loginForm.get('password')?.value,
    }
    this.loginService.primerFactor(datosBody).subscribe(
      (data: any) => {
        if(data.metadata[0].codigo == "00"){          
          localStorage.setItem('user', this.loginForm.get('username')?.value)
          this.router.navigate(['/autenticacion']);
        }  
      },
      (error: any) => {
        console.log("Error", error);
      }
    );
  }
}

