import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AdministrativoService } from 'src/app/modulos/template/servicios/administrativos/administrativo-service.service';
import { AplicacionService } from 'src/app/modulos/template/servicios/aplicaciones/aplicacion-service.service';

@Component({
  selector: 'app-nueva-aplicacion-modal',
  templateUrl: './nueva-aplicacion-modal.component.html',
  styleUrls: ['./nueva-aplicacion-modal.component.css']
})
export class NuevaAplicacionModalComponent implements OnInit {

  aplicacionForm!: FormGroup;
  private administrativoService = inject(AdministrativoService);
  private fb = inject(FormBuilder);
  private aplicacionService = inject(AplicacionService);
  private dialogRef = inject(MatDialogRef);
  private administrativo! : any;

  constructor() { }

  ngOnInit(): void {
    this.obtenerAdministrativo(1);
    this.aplicacionForm = this.fb.group({
      nombre: ['', Validators.required],
      url: ['', Validators.required]
    });
  }

  onSave() {
    let datosBody = {
      nombreAplicacion: this.aplicacionForm.get('nombre')?.value,
      url: this.aplicacionForm.get('url')?.value,
      administrativos: this.administrativo
    }
    this.aplicacionService.saveAplicacion(datosBody).subscribe((data: any) => {
            this.dialogRef.close(1);
    }), (error: any) => {
      this.dialogRef.close(2);
    }

  }

  onCancel(){
    this.dialogRef.close(3);
  }

  obtenerAdministrativo(idAdministrativo: number): any{
    this.administrativoService.buscarAdministrativo(idAdministrativo).subscribe((data: any) => {      
      if (data.metadata[0].codigo == "00") {
      this.administrativo = data.administrativoResponse.administrativo[0];
      console.log(this.administrativo);
      }
    }, (error: any) => {
      console.log("Error", error);
    });
  }
}
