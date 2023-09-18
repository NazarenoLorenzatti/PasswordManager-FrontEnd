import { Component, OnInit, inject } from '@angular/core';
import { CredencialService } from '../../servicios/credenciales/credencial-service.service';
import { MediaMatcher } from '@angular/cdk/layout';
import { NuevaCredencialModalComponent } from 'src/app/modulos/home/paginas/credenciales/nueva-credencial-modal/nueva-credencial-modal.component';
import { EditarCredencialModalComponent } from 'src/app/modulos/home/paginas/credenciales/editar-credencial-modal/editar-credencial-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material/snack-bar';
import { ConfirmComponent } from '../confirmacion/confirm/confirm.component';
import { AdministrativoService } from '../../servicios/administrativos/administrativo-service.service';

@Component({
  selector: 'card-selector',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {

  private credencialService = inject(CredencialService);
  private administrativoService = inject(AdministrativoService);
  pantallaCelu: MediaQueryList;
  public dialog = inject(MatDialog);
  public aviso = inject(MatSnackBar);
  listaDeCredenciales: any[] = [];
 

  ngOnInit(): void {
    let requestBody ={
      username: localStorage.getItem('user'),
    }
    this.administrativoService.buscarAdministrativoPorUsuario(requestBody).subscribe((data: any) => {
      console.log("Administrativo", data);
      if(data.metadata[0].codigo == "00"){
        this.obtenerCredencialPorAdministrativo(data.administrativoResponse.administrativo[0].idAdministrativo);
      }
    }, (error: any) => {
      console.log("Error", error);
    });    
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
      console.log(resp);
      this.listaDeCredenciales = resp.credencialResponse.credencial;
      this.listaDeCredenciales.forEach(credencial => {
        
        const timestamp = credencial.proximaActualizacion;
        const fecha = new Date(timestamp);

        credencial.contraVisible = false;
        credencial.proximaActualizacion = fecha.toLocaleDateString('es-ES',{ year: 'numeric', month: 'numeric', day: 'numeric' });
      });  
    }

  }

  abrirModalNueva(): void {
    const dialogRef = this.dialog.open(NuevaCredencialModalComponent, {
      width: '550px',   
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result == 1 ){
        this.mostrarAviso("Se guardo la Credencial", "Exito");    
        this.obtenerCredencialPorAdministrativo(1);    
      }else if(result == 2){
        this.mostrarAviso("Error al guardar la Credencial", "Error");
      }
    });
  }

  abrirModalEditar(credencial:any): void {
    this.credencialService.credencial = credencial;    
    const dialogRef = this.dialog.open(EditarCredencialModalComponent, {
      width: '550px',   
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result == 1 ){
        this.mostrarAviso("Se guardo la Credencial", "Exito");     
        this.obtenerCredencialPorAdministrativo(1);   
      }else if(result == 2){
        this.mostrarAviso("Error al guardar la Credencial", "Error");
      }
    });
  }

  mostrarAviso(mensaje: string, accion: string) : MatSnackBarRef<SimpleSnackBar>{
    return this.aviso.open(mensaje,accion, {
      duration: 3000
    })
  }

  eliminarCredencial(idCredencial : number){
    const dialogRef = this.dialog.open(ConfirmComponent, {
      width: '300px',    
      data: {id: idCredencial , name: "credenciales"}
    });

    dialogRef.afterClosed().subscribe((result:any) => {
      if(result == 1){
        this.mostrarAviso("Credencial Eliminada", "Exitosa");
        this.obtenerCredencialPorAdministrativo(1);  
      } else if (result == 2){
        this.mostrarAviso("Error al eliminar la Credencial", "Error");
      }
    })
  }

  mostrarContra(credencial: any) {
    credencial.contraVisible = true;
  }

  ocultarContra(credencial: any) {
    credencial.contraVisible = false;
  }

  
}

