import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AplicacionService } from 'src/app/modulos/template/servicios/aplicaciones/aplicacion-service.service';

@Component({
  selector: 'app-nueva-aplicacion-modal',
  templateUrl: './nueva-aplicacion-modal.component.html',
  styleUrls: ['./nueva-aplicacion-modal.component.css']
})
export class NuevaAplicacionModalComponent implements OnInit {

  aplicacionForm!: FormGroup;
  private fb = inject(FormBuilder);
  private aplicacionService = inject(AplicacionService);
  private dialogRef = inject(MatDialogRef);

  constructor() { }

  ngOnInit(): void {
    this.aplicacionForm = this.fb.group({
      nombre: ['', Validators.required],
      url: ['', Validators.required]
    });
  }

  onSave() {
    let datosBody = {
      nombreAplicacion: this.aplicacionForm.get('nombre')?.value,
      url: this.aplicacionForm.get('url')?.value,
    }

    this.aplicacionService.saveAplicacion(datosBody).subscribe((data: any) => {
      console.log(data);
      this.dialogRef.close(1);
    }), (error: any) => {
      this.dialogRef.close(2);
    }

  }

  onCancel(){
    this.dialogRef.close(3);
  }
}
