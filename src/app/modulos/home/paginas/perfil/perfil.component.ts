import { Component, OnInit, inject } from '@angular/core';
import { AdministrativoService } from 'src/app/modulos/template/servicios/administrativos/administrativo-service.service';
import { CredencialService } from 'src/app/modulos/template/servicios/credenciales/credencial-service.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  private administrativoService = inject(AdministrativoService);

  nombre: string = '';
  apellido: string = '';
  email: string = '';
  telefono: string = '';
  username: string = '';
  password: string = '';

  constructor() { 
    
  }

  ngOnInit(): void {
   this.obtenerAdministrativo(1);
  }

  obtenerAdministrativo(idAdministrativo: number): void{
    this.administrativoService.buscarAdministrativo(idAdministrativo).subscribe((data: any) => {      
      this.procesarResponse(data);
      console.log("ADMINISTRATIVO", data);
    }, (error: any) => {
      console.log("Error", error);
    })

  }

  procesarResponse(resp: any) { 
    if (resp.metadata[0].codigo == "00") {
      this.nombre = resp.administrativoResponse.administrativo[0].nombre;
      this.apellido = resp.administrativoResponse.administrativo[0].apellido;
      this.email = resp.administrativoResponse.administrativo[0].email;
      this.telefono = resp.administrativoResponse.administrativo[0].telefono;
      this.username = resp.administrativoResponse.administrativo[0].usuario.username;
      this.password = resp.administrativoResponse.administrativo[0].usuario.password;
    }
  }


}
