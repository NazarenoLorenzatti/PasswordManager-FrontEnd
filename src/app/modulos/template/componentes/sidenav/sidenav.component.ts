import { MediaMatcher } from '@angular/cdk/layout';
import { Component, inject } from '@angular/core';
import { AdministrativoService } from '../../servicios/administrativos/administrativo-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {

  private administrativoService = inject(AdministrativoService);
  private router = inject(Router);

  nombre: string = '';
  apellido: string = '';
  email: string = '';
  telefono: string = '';
  username: string = '';
  password: string = '';
  imgPerfil!: any;

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
    this.obtenerAdministrativo();
  }

  obtenerAdministrativo(): void{
    let requestBody ={
      username: localStorage.getItem('user'),
    }
    this.administrativoService.buscarAdministrativoPorUsuario(requestBody).subscribe((data: any) => {      
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
      if(resp.administrativoResponse.administrativo[0].usuario.imgPerfil=== null){
        this.imgPerfil = null;
      } else {
        this.imgPerfil = 'data:image/jpeg;base64,' + resp.administrativoResponse.administrativo[0].usuario.imgPerfil;
      }
    }
  }

  logout() {
    localStorage.removeItem('token');    
    this.router.navigate(['/login']);
  }
}
