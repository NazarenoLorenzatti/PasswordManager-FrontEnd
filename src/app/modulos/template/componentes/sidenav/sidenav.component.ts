import { MediaMatcher } from '@angular/cdk/layout';
import { Component, inject } from '@angular/core';
import { AdministrativoService } from '../../servicios/administrativos/administrativo-service.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {

  private administrativoService = inject(AdministrativoService);

  nombre: string = '';
  apellido: string = '';
  email: string = '';
  telefono: string = '';
  username: string = '';
  password: string = '';

  pantallaCelu: MediaQueryList;
  menuNav = [
    {
      name: "Pagina Principal", 
      ruta: "pagina-principal",
      icono: "home"
    },
    {
      name: "Aplicaciones", 
      ruta: "aplicaciones",
      icono: "airplay"
    },
    {
      name: "Administrativo", 
      ruta: "perfil",
      icono: "face"
    },
    {
      name: "Credenciales", 
      ruta: "credenciales",
      icono: "lock"
    }
  ]

  constructor(media : MediaMatcher){
    this.pantallaCelu = media.matchMedia('(max-width: 600px)');    
  }

  ngOnInit(): void{
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
