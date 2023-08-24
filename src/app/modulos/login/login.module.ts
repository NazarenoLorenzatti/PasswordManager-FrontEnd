import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaLoginComponent } from './paginas/pagina-login/pagina-login.component';
import { LoginComponente } from './componente/login-componente.component';
import { TemplateModule } from '../template/template.module';
import { RegistroUsuarioComponent } from './paginas/registro-usuario/registro-usuario.component';

@NgModule({
  declarations: [
    PaginaLoginComponent,
    LoginComponente,
    RegistroUsuarioComponent    
  ],
  imports: [
    CommonModule,
    TemplateModule
  ]
})
export class LoginModule { }
