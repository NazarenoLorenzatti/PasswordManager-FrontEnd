import { Component, OnInit, inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AplicacionService } from '../../servicios/aplicaciones/aplicacion-service.service';
import { MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { EditarAplicacionModalComponent } from 'src/app/modulos/home/paginas/aplicaciones/editar-aplicacion-modal/editar-aplicacion-modal.component';
import { NuevaAplicacionModalComponent } from 'src/app/modulos/home/paginas/aplicaciones/nueva-aplicacion-modal/nueva-aplicacion-modal.component';
import { ConfirmComponent } from '../confirmacion/confirm/confirm.component';
import { AdministrativoService } from '../../servicios/administrativos/administrativo-service.service';

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
  private administrativoService = inject(AdministrativoService);
  public dialog = inject(MatDialog);
  public aviso = inject(MatSnackBar); // Para mostrar avisos dinamicos

  columnasTabla: string[] = ['id', 'Aplicacion', 'Link', 'Acciones'];
  dataSource = new MatTableDataSource<AplicacionElement>();

  ngOnInit(): void {
    this.obtenerAplicacionsPorAdministrativo();
  }

  abrirModal(id:number, nombre: string , url: string): void {  

    this.aplicacionService.idApp = id;
    this.aplicacionService.nombreAplicacion = nombre;
    this.aplicacionService.urlApp = url;  
    
    const dialogRef = this.dialog.open(EditarAplicacionModalComponent, {  
    width: '550px',   
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result == 1 ){
        this.mostrarAviso("Se guardo la Aplicacion", "Exito");
        this.obtenerAplicacionsPorAdministrativo();
      }else if(result == 2){
        this.mostrarAviso("Error al guardar la Aplicacion", "Error");
      }
    });
  }

  mostrarAviso(mensaje: string, accion: string) : MatSnackBarRef<SimpleSnackBar>{
    return this.aviso.open(mensaje,accion, {
      duration: 3000
    })
  }


  obtenerAplicacionsPorAdministrativo(): void{
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
    const dataAplicaciones: AplicacionElement[] = [];
    if (resp.metadata[0].codigo == "00") {
      let listaDeAplicaciones = resp.administrativoResponse.administrativo[0].aplicaciones;
      listaDeAplicaciones.forEach((element: AplicacionElement) => {        
        dataAplicaciones.push(element);
      });      
      this.dataSource = new MatTableDataSource<AplicacionElement>(dataAplicaciones);
    }
  }

  eliminar(id:number): void{    
    const dialogRef = this.dialog.open(ConfirmComponent, {
      width: '300px',    
      data: {id: id , name: "aplicaciones"}
    });

    dialogRef.afterClosed().subscribe((result:any) => {
      if(result == 1){
        this.mostrarAviso("Aplicacion Eliminada", "Exitosa");
        this.obtenerAplicacionsPorAdministrativo();
      } else if (result == 2){
        this.mostrarAviso("Error al eliminar aplicacion", "Error");
      }
    })
  }

}

export interface AplicacionElement {
  id: number;
  Aplicacion: string;
  Link: string;
}