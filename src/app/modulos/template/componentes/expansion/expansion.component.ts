import {Component, OnInit, inject} from '@angular/core';
import { AplicacionService } from '../../servicios/aplicaciones/aplicacion-service.service';
import { AplicacionElement } from '../tabla/tabla.component';
import { ConfirmComponent } from '../confirmacion/confirm/confirm.component';
import { MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { EditarAplicacionModalComponent } from 'src/app/modulos/home/paginas/aplicaciones/editar-aplicacion-modal/editar-aplicacion-modal.component';


@Component({
  selector: 'expansion-overview',
  templateUrl: 'expansion.component.html',
  styleUrls: ['expansion.component.css']
})
export class ExpansionComponent implements OnInit {
  panelOpenState = false;

  private aplicacionService = inject(AplicacionService);
  public dialog = inject(MatDialog);
  public aviso = inject(MatSnackBar); 
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
        this.listarAplicaciones();
      }else if(result == 2){
        this.mostrarAviso("Error al guardar la Aplicacion", "Error");
      }
    });
  }

  
  eliminar(id:number): void{    
    const dialogRef = this.dialog.open(ConfirmComponent, {
      width: '300px',    
      data: {id: id , name: "aplicaciones"}
    });

    dialogRef.afterClosed().subscribe((result:any) => {
      if(result == 1){
        this.mostrarAviso("Aplicacion Eliminada", "Exitosa");
        this.listarAplicaciones(); 
      } else if (result == 2){
        this.mostrarAviso("Error al eliminar aplicacion", "Error");
      }
    })
  }


  mostrarAviso(mensaje: string, accion: string) : MatSnackBarRef<SimpleSnackBar>{
    return this.aviso.open(mensaje,accion, {
      duration: 3000
    })
  }


}

