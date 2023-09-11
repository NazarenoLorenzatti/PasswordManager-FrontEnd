import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdministrativoService } from 'src/app/modulos/template/servicios/administrativos/administrativo-service.service';
import { UsuarioService } from 'src/app/modulos/template/servicios/usuario/usuario.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  private administrativoService = inject(AdministrativoService);
  private usuarioService = inject(UsuarioService);

  perfilForm!: FormGroup;
  private fb = inject(FormBuilder);
  editar: boolean = false;
  nombre: string = '';
  apellido: string = '';
  email: string = '';
  telefono: string = '';
  username!: string;
  password!: string;
  idUsuario!: number;
  contraVisible: boolean = false;
  imgPerfil!: any;
  selectedFile: any = null;


  constructor() {

  }

  ngOnInit(): void {
    this.obtenerAdministrativo(1);
  }

  obtenerAdministrativo(idAdministrativo: number): void {
    this.administrativoService.buscarAdministrativo(idAdministrativo).subscribe((data: any) => {
      this.procesarResponse(data);
    }, (error: any) => {
      console.log("Error", error);
    });
  }

  procesarResponse(resp: any) {
    if (resp.metadata[0].codigo == "00") {
      this.nombre = resp.administrativoResponse.administrativo[0].nombre;
      this.apellido = resp.administrativoResponse.administrativo[0].apellido;
      this.email = resp.administrativoResponse.administrativo[0].email;
      this.telefono = resp.administrativoResponse.administrativo[0].telefono;
      this.idUsuario = resp.administrativoResponse.administrativo[0].usuario.idUsuario;
      this.username = resp.administrativoResponse.administrativo[0].usuario.username;
      this.password = resp.administrativoResponse.administrativo[0].usuario.password;
      this.imgPerfil = 'data:image/jpeg;base64,' + resp.administrativoResponse.administrativo[0].usuario.imgPerfil;
    }

    this.perfilForm = this.fb.group({
      id: [this.idUsuario],
      username: [this.username, Validators.required],
      password: [this.password, Validators.required]
    });
  }

  eliminarUsuario() {

  }

  actualizarUsuario() {
    this.editar = true;
  }

  onSave() {
    let datosBody = {
      idUsuario: this.perfilForm.get('id')?.value,
      username: this.perfilForm.get('username')?.value,
      password: this.perfilForm.get('password')?.value,
    }
    this.usuarioService.actualizarUsuario(datosBody).subscribe((data: any) => {
      console.log(data);
      this.username = data.usuarioResponse.usuario[0].username;
      this.password = data.usuarioResponse.usuario[0].password;
      this.perfilForm = this.fb.group({
        id: [this.idUsuario],
        username: [this.username, Validators.required],
        password: [this.password, Validators.required]
      });

    }), (error: any) => {
      console.log("Error");
    }
    this.editar = false;
  }

  onCancel() {
    this.editar = false;
  }

  mostrarContra() {
    this.contraVisible = true;
  }

  ocultarContra() {
    this.contraVisible = false;
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0] ?? null;     
  }

  uploadImg(file: File){
         
      const formData = new FormData();
      formData.append('username', 'nl.loragro@gmail.com');
      formData.append('img', file);
      
      this.usuarioService.subirFoto(formData).subscribe((resp: any) => {
      console.log('Imagen guardada con éxito en el servidor');
      });  
      this.obtenerAdministrativo(1);
  }  

}
