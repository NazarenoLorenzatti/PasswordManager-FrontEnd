import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AplicacionService } from 'src/app/modulos/template/servicios/aplicaciones/aplicacion-service.service';

@Component({
  selector: 'app-editar-aplicacion-modal',
  templateUrl: './editar-aplicacion-modal.component.html',
  styleUrls: ['./editar-aplicacion-modal.component.css']
})
export class EditarAplicacionModalComponent implements OnInit {

  aplicacionForm!: FormGroup;
  private fb = inject(FormBuilder);
  private aplicacionService = inject(AplicacionService);
  private dialogRef = inject(MatDialogRef);
  
  constructor() { }

  ngOnInit(): void {
      this.aplicacionForm = this.fb.group({
      id: [{value: this.aplicacionService.idApp, disabled: true}],
      nombre: [this.aplicacionService.nombreAplicacion, Validators.required],
      url: [this.aplicacionService.urlApp, Validators.required]
    });
  }

  onSave() { 
    let datosBody = {
      idAplicacion: this.aplicacionForm.get('id')?.value,
      nombreAplicacion: this.aplicacionForm.get('nombre')?.value,
      url: this.aplicacionForm.get('url')?.value,
    }
    this.aplicacionService.editarAplicacion(datosBody).subscribe((data: any) => {    
      this.dialogRef.close(1);
    }), (error: any) => {
      this.dialogRef.close(2);
    }
  }

  onCancel(){
    this.dialogRef.close(3);
  }
}
