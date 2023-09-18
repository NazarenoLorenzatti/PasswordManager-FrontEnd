import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdministrativoService } from 'src/app/modulos/template/servicios/administrativos/administrativo-service.service';

@Component({
  selector: 'app-crear-administrativo',
  templateUrl: './crear-administrativo.component.html',
  styleUrls: ['./crear-administrativo.component.css']
})
export class CrearAdministrativoComponent implements OnInit {
  administrativoForm!: FormGroup;
  private router = inject(Router);
  private administrativoService = inject(AdministrativoService);
  private fb = inject(FormBuilder);

  ngOnInit(): void {
    console.log(localStorage.getItem('token'));
    this.administrativoForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', Validators.required],
      telefono: ['', Validators.required]
    });
  }

  onSubmit() {    
    let datosBody = {
      nombre: this.administrativoForm.get('nombre')?.value,
      apellido: this.administrativoForm.get('apellido')?.value,
      email: this.administrativoForm.get('email')?.value,
      telefono: this.administrativoForm.get('telefono')?.value,
      usuario: {
        username: localStorage.getItem('user')
      }
    }

    this.administrativoService.crearAdministrativo(datosBody).subscribe(
      (data: any) => {

        console.log(data);
        
        if(data.metadata[0].codigo == "00"){  
          this.router.navigate(['/home']);
        }       

      }, (error: any) => {
        console.log("Error", error);
      }
    );   
  }

}
