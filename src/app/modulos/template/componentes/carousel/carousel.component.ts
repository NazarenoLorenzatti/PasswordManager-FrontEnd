import { Component, HostListener, OnInit, inject } from '@angular/core';
import { CredencialService } from '../../servicios/credenciales/credencial-service.service';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  private credencialService = inject(CredencialService);
  pantallaCelu: MediaQueryList;
  listaDeCredenciales: any[] = [];
  anchoPantalla: number;
  slides: any[] = [];

  contador: number = 0;

  constructor(media: MediaMatcher) {
    this.anchoPantalla = window.innerWidth; // Obtener el ancho inicial de la ventana
    this.pantallaCelu = media.matchMedia('(max-width: 800px)');
  }

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

      let grupo1Credenciales: any[] = [];
      let grupo2Credenciales: any[] = [];
      let grupo3Credenciales: any[] = [];
      let grupo4Credenciales: any[] = [];
      let grupo5Credenciales: any[] = [];
      let grupo6Credenciales: any[] = [];
      let grupo7Credenciales: any[] = [];

      for (let i = 0; i < this.listaDeCredenciales.length; i++) {
        if (i >= 0 && i <= 3) {          
          grupo1Credenciales.push(this.listaDeCredenciales[i]);
        } else if (i >= 4 && i <= 7) {
          grupo2Credenciales.push(this.listaDeCredenciales[i]);
        } else if (i >= 8 && i <= 11) {
          grupo3Credenciales.push(this.listaDeCredenciales[i]);
        } else if (i >= 12 && i <= 15) {
          grupo4Credenciales.push(this.listaDeCredenciales[i]);
        } else if (i >= 16 && i <= 19) {
          grupo5Credenciales.push(this.listaDeCredenciales[i]);
        } else if (i >= 20 && i <= 23) {
          grupo6Credenciales.push(this.listaDeCredenciales[i]);
        } else if (i >= 24 && i <= 27) {
          grupo7Credenciales.push(this.listaDeCredenciales[i]);
        }
      }

      if(grupo1Credenciales.length > 0){
        this.slides.push(grupo1Credenciales);
      }
      if(grupo2Credenciales.length > 0){
        this.slides.push(grupo2Credenciales);
      }
      if(grupo3Credenciales.length > 0){
        this.slides.push(grupo3Credenciales);
      }
      if(grupo4Credenciales.length > 0){
        this.slides.push(grupo4Credenciales);
      }
      if(grupo5Credenciales.length > 0){
        this.slides.push(grupo5Credenciales);
      }
      if(grupo6Credenciales.length > 0){
        this.slides.push(grupo6Credenciales);
      }
      if(grupo7Credenciales.length > 0){
        this.slides.push(grupo7Credenciales);
      }

    }
    console.log("SLIDES", this.slides);
  }

}

