import { Component, OnInit, inject } from '@angular/core';
import { CredencialService } from '../../servicios/credenciales/credencial-service.service';
import { MediaMatcher } from '@angular/cdk/layout';
import { NuevaCredencialModalComponent } from 'src/app/modulos/home/paginas/credenciales/nueva-credencial-modal/nueva-credencial-modal.component';
import { EditarCredencialModalComponent } from 'src/app/modulos/home/paginas/credenciales/editar-credencial-modal/editar-credencial-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'card-selector',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {

  private credencialService = inject(CredencialService);
  pantallaCelu: MediaQueryList;
  public dialog = inject(MatDialog);
  public aviso = inject(MatSnackBar);
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
      this.listaDeCredenciales.forEach(credencial => {
        credencial.contraVisible = false;
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
    this.credencialService.eliminarCredencial(idCredencial).subscribe((data:any) => {
      if(data.metadata[0].codigo== "00"){
        this.mostrarAviso("Se Elimino la Aplicacion", "Exito")
        this.obtenerCredencialPorAdministrativo(1);
      }else if(data.metadata[0].codigo == 2){
        this.mostrarAviso("Error al Eliminar la Aplicacion", "Error");
      }
    });    
  
  }

  mostrarContra(credencial: any) {
    credencial.contraVisible = true;
  }

  ocultarContra(credencial: any) {
    credencial.contraVisible = false;
  }

  
}

