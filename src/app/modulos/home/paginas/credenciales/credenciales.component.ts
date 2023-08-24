import { MediaMatcher } from '@angular/cdk/layout';
import { Component, HostListener, OnInit, inject } from '@angular/core';
import { CredencialService } from 'src/app/modulos/template/servicios/credenciales/credencial-service.service';

@Component({
  selector: 'app-credenciales',
  templateUrl: './credenciales.component.html',
  styleUrls: ['./credenciales.component.css']
})
export class CredencialesComponent implements OnInit {

  private credencialService = inject(CredencialService);
  pantallaCelu: MediaQueryList;
  listaDeCredenciales: any[] = []; 
  anchoPantalla: number;

  constructor(media: MediaMatcher) {
    this.anchoPantalla = window.innerWidth; // Obtener el ancho inicial de la ventana
    this.pantallaCelu = media.matchMedia('(max-width: 800px)');
  }

  // PARA QUE SE ACTUALICE CUANDO SE VUELVA A AGRANDAR LA PANTALLA
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.anchoPantalla = event.target.innerWidth;
  }

  ngOnInit(): void {
    this.obtenerCredencialPorAdministrativo(1);
  }

  obtenerCredencialPorAdministrativo(idAdministrativo: number): void {
    this.credencialService.buscarCredencialPorAdministrativo(idAdministrativo).subscribe((data: any) => {
      this.procesarResponse(data);
    }, (error: any) => {
      console.log("Error", error);
    })
  }

  procesarResponse(resp: any) {
 
    if (resp.metadata[0].codigo == "00") {
      this.listaDeCredenciales = resp.credencialResponse.credencial;
      console.log("LISTA DE CREDENCIALES", this.listaDeCredenciales);
    }

  }

}
