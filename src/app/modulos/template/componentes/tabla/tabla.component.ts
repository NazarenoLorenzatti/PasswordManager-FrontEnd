import { Component, OnInit, inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AplicacionService } from '../../servicios/aplicaciones/aplicacion-service.service';

/**
 * @title Flex table where one column's cells has a greater height than others.
 */
@Component({
  selector: 'tabla-aplicaciones',
  styleUrls: ['tabla.component.css'],
  templateUrl: 'tabla.component.html',
})
export class TablaComponent implements OnInit {

  private aplicacionService = inject(AplicacionService);

  columnasTabla: string[] = ['id', 'Aplicacion', 'Link', 'Acciones'];
  dataSource = new MatTableDataSource<AplicacionElement>();


  ngOnInit(): void {
    this.listarAplicaciones();
  }

  listarAplicaciones(): void {
    this.aplicacionService.getAplicaciones().subscribe((data: any) => {

      this.procesarResponse(data);
     // console.log(data);

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
      
      this.dataSource = new MatTableDataSource<AplicacionElement>(dataAplicaciones);
    }
  }

}

export interface AplicacionElement {
  id: number;
  Aplicacion: string;
  Link: string;
}