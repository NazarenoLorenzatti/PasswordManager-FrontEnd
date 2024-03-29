import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AplicacionElement } from 'src/app/modulos/template/componentes/tabla/tabla.component';
import { AdministrativoService } from 'src/app/modulos/template/servicios/administrativos/administrativo-service.service';
import { AplicacionService } from 'src/app/modulos/template/servicios/aplicaciones/aplicacion-service.service';
import { CredencialService } from 'src/app/modulos/template/servicios/credenciales/credencial-service.service';

@Component({
  selector: 'app-nueva-credencial-modal',
  templateUrl: './nueva-credencial-modal.component.html',
  styleUrls: ['./nueva-credencial-modal.component.css']
})
export class NuevaCredencialModalComponent implements OnInit {

  private administrativoService = inject(AdministrativoService);
  private administrativo! : any;
  private aplicacionService = inject(AplicacionService);
  listaDeAplicaciones : any [] = [];
  credencialForm!: FormGroup;
  private fb = inject(FormBuilder);
  private credencialService = inject(CredencialService);
  private dialogRef = inject(MatDialogRef);
  
  ngOnInit(): void {    
    this.obtenerAdministrativo();
    this.obtenerAplicacionsPorAdministrativo;
    this.credencialForm = this.fb.group({
      idAplicacion: ['', Validators.required],
      usuarioAplicacion: ['', Validators.required],
      contraAplicacion: ['', Validators.required],
    });
  }

  onSave() { 
     let datosBody = {
      aplicacion: this.credencialForm.get('idAplicacion')?.value,
      usuario: this.credencialForm.get('usuarioAplicacion')?.value,
      contra: this.credencialForm.get('contraAplicacion')?.value,
      administrativo: this.administrativo,
    }
    this.credencialService.guardarCredencial(datosBody).subscribe((data: any) => {    
      this.dialogRef.close(1);
    }), (error: any) => {
      this.dialogRef.close(2);
    }
  }

  onCancel(){
    this.dialogRef.close(3);
  }

  obtenerAplicacionsPorAdministrativo(): void{
    let requestBody ={
      username: localStorage.getItem('user'),
    }
    this.administrativoService.buscarAdministrativoPorUsuario(requestBody).subscribe((data: any) => {      
      this.procesarResponse(data);
    }, (error: any) => {
      console.log("Error", error);
    })

  }

  procesarResponse(resp: any) {
    const dataAplicaciones: AplicacionElement[] = [];
    if (resp.metadata[0].codigo == "00") {
      this.administrativo = resp.administrativoResponse.administrativo[0];
      let listaDeAplicaciones = resp.administrativoResponse.administrativo[0].aplicaciones; 
      listaDeAplicaciones.forEach((element: AplicacionElement) => {
        dataAplicaciones.push(element);
      });
      this.listaDeAplicaciones = dataAplicaciones;
    }
  }

  obtenerAdministrativo(): void{
    let requestBody ={
      username: localStorage.getItem('user'),
    }
    this.administrativoService.buscarAdministrativoPorUsuario(requestBody).subscribe((data: any) => {      
      this.procesarResponse(data);
    }, (error: any) => {
      console.log("Error", error);
    })


  }

}
