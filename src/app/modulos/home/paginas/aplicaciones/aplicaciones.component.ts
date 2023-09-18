import { Component, ViewChild, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NuevaAplicacionModalComponent } from './nueva-aplicacion-modal/nueva-aplicacion-modal.component';
import { MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material/snack-bar';
import { TablaComponent } from 'src/app/modulos/template/componentes/tabla/tabla.component';


@Component({
  selector: 'app-aplicaciones',
  templateUrl: './aplicaciones.component.html',
  styleUrls: ['./aplicaciones.component.css']
})
export class AplicacionesComponent {


  @ViewChild(TablaComponent)
  tablaComponent!: TablaComponent;
  public dialog = inject(MatDialog);
  public aviso = inject(MatSnackBar); // Para mostrar avisos dinamicos


  abrirModal(): void {
    const dialogRef = this.dialog.open(NuevaAplicacionModalComponent, {
      width: '550px',   
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result == 1 ){
        this.mostrarAviso("Se guardo la Aplicacion", "Exito");
        this.tablaComponent.obtenerAplicacionsPorAdministrativo();
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

}

