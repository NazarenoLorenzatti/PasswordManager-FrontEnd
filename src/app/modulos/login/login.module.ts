import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaLoginComponent } from './paginas/pagina-login/pagina-login.component';

import { TemplateModule } from '../template/template.module';
import { RegistroUsuarioComponent } from './paginas/registro-usuario/registro-usuario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../template/material.module';
import { AutenticacionComponent } from './paginas/segundo-factor/autenticacion/autenticacion.component';
import { CrearAdministrativoComponent } from './paginas/crear-administrativo/crear-administrativo.component';

@NgModule({
  declarations: [
    PaginaLoginComponent,
    RegistroUsuarioComponent,
    AutenticacionComponent,
    CrearAdministrativoComponent   
  ],
  imports: [
    CommonModule,
    TemplateModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class LoginModule { }
