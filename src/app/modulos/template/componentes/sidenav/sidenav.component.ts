import { MediaMatcher } from '@angular/cdk/layout';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {

  pantallaCelu: MediaQueryList;
  menuNav = [
    {
      name: "Pagina Principal", 
      ruta: "pagina-principal",
      icono: "category"
    },
    {
      name: "Aplicaciones", 
      ruta: "aplicaciones",
      icono: "category"
    },
    {
      name: "Administrativo", 
      ruta: "perfil",
      icono: "production_quantity_limits"
    },
    {
      name: "Credenciales", 
      ruta: "credenciales",
      icono: "home"
    },
  ]

  constructor(media : MediaMatcher){
    this.pantallaCelu = media.matchMedia('(max-width: 600px)');    
  }

  ngOnInit(): void{

  }
}
