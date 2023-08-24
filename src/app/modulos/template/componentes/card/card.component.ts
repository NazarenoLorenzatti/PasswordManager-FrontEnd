import { Component, ElementRef, OnInit, Renderer2, inject } from '@angular/core';
import { CredencialService } from '../../servicios/credenciales/credencial-service.service';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'card-selector',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {

  private credencialService = inject(CredencialService);
  pantallaCelu: MediaQueryList;

  listaDeCredenciales: any[] = [];
 

  ngOnInit(): void {
    this.obtenerCredencialPorAdministrativo(1);
  }

  constructor(media : MediaMatcher) {
    this.pantallaCelu = media.matchMedia('(max-width: 600px)');    
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

