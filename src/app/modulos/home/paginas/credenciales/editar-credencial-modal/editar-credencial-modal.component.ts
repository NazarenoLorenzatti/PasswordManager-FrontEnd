import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { CredencialService } from 'src/app/modulos/template/servicios/credenciales/credencial-service.service';

@Component({
  selector: 'app-editar-credencial-modal',
  templateUrl: './editar-credencial-modal.component.html',
  styleUrls: ['./editar-credencial-modal.component.css']
})
export class EditarCredencialModalComponent implements OnInit {
  
  credencialForm!: FormGroup;
  private fb = inject(FormBuilder);
  private credencialService = inject(CredencialService);
  private dialogRef = inject(MatDialogRef);
  
  
  constructor() { }

  ngOnInit(): void {
      this.credencialForm = this.fb.group({
      idCredencial: [{value: this.credencialService.credencial.idCredencial, disabled: true}],
      usuarioAplicacion: [this.credencialService.credencial.usuario, Validators.required],
      contraAplicacion: [this.credencialService.credencial.contra, Validators.required],
      estadoCredencial: [this.credencialService.credencial.estadoCredencial.nombreCredencial, Validators.required],
      proximaActualizacion: [this.credencialService.credencial.proximaActualizacion, Validators.required],
    });
  }

  onSave() { 
    let datosBody = {
      idCredencial: this.credencialForm.get('idCredencial')?.value,
      usuario: this.credencialForm.get('usuarioAplicacion')?.value,
      contra: this.credencialForm.get('contraAplicacion')?.value,
    }
    this.credencialService.editarCredencial(datosBody).subscribe((data: any) => {    
      this.dialogRef.close(1);
    }), (error: any) => {
      this.dialogRef.close(2);
    }
  }

  onCancel(){
    this.dialogRef.close(3);
  }
}
