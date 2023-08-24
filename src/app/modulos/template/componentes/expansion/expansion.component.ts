import {Component, OnInit, inject} from '@angular/core';
import { AplicacionService } from '../../servicios/aplicaciones/aplicacion-service.service';
import { AplicacionElement } from '../tabla/tabla.component';


@Component({
  selector: 'expansion-overview',
  templateUrl: 'expansion.component.html',
  styleUrls: ['expansion.component.css']
})
export class ExpansionComponent implements OnInit {
  panelOpenState = false;

  private aplicacionService = inject(AplicacionService);

  listaDeAplicaciones : any [] = [];

  
  ngOnInit(): void {
    this.listarAplicaciones();
  }

  constructor(){
       
  }

  listarAplicaciones(): void {
    this.aplicacionService.getAplicaciones().subscribe((data: any) => {
      this.procesarResponse(data);
    }, (error: any) => {
      console.log("Error", error);
    })
  }

  procesarResponse(resp: any) {
    const dataAplicaciones: AplicacionElement[] = [];

    if (resp.metadata[0].codigo == "00") {
      let listaDeAplicaciones = resp.aplicacionResponse.aplicacion;
      //console.log(listaDeAplicaciones);

      listaDeAplicaciones.forEach((element: AplicacionElement) => {
        console.log("ELEMENTO",element);
        dataAplicaciones.push(element);
      });

      this.listaDeAplicaciones = dataAplicaciones;
      console.log("LISTA DE APLICACIONES",listaDeAplicaciones);
    }
  }

}

