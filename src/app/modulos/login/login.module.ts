import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaLoginComponent } from './paginas/pagina-login/pagina-login.component';
import { LoginComponente } from './componente/login-componente.component';
import { TemplateModule } from '../template/template.module';
import { RegistroUsuarioComponent } from './paginas/registro-usuario/registro-usuario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PaginaLoginComponent,
    LoginComponente,
    RegistroUsuarioComponent    
  ],
  imports: [
    CommonModule,
    TemplateModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class LoginModule { }
