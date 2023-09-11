import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AplicacionService } from '../../../servicios/aplicaciones/aplicacion-service.service';
import { CredencialService } from '../../../servicios/credenciales/credencial-service.service';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent {

  private dialogRef=inject(MatDialogRef);
  public data = inject(MAT_DIALOG_DATA);
  private aplicacionService = inject(AplicacionService); 
  private credencialService = inject(CredencialService);

  onNoClick(){
    this.dialogRef.close(3)
  }

  delete(){    
    if(this.data != null){
      if(this.data.name === "aplicaciones"){
        this.aplicacionService.eliminarAplicacion(this.data.id).subscribe((data:any) => {
          if(data.metadata[0].codigo== "00"){
            this.dialogRef.close(1);
          } 
        }, (error: any) => {
          this.dialogRef.close(2);
        }); 
      } else if (this.data.name === "credenciales") {
        this.credencialService.eliminarCredencial(this.data.id).subscribe((data:any) => {
          if(data.metadata[0].codigo== "00"){
            this.dialogRef.close(1);
          } 
        }, (error: any) => {
          this.dialogRef.close(2);
        }); 
      }      
      
    } else {
      this.dialogRef.close(2);
    }
  }

}
