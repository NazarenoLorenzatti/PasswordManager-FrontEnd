import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Modulos creados por mi
import { RegistroUsuarioComponent } from './paginas/registro-usuario/registro-usuario.component';
import { PaginaLoginComponent } from './paginas/pagina-login/pagina-login.component';
import { AutenticacionComponent } from './paginas/segundo-factor/autenticacion/autenticacion.component';

const constRutasHijas: Routes = [
  { path: '', component: PaginaLoginComponent },
  { path: 'login', component: PaginaLoginComponent },
  { path: 'autenticacion', component: AutenticacionComponent },
  { path: 'registrar-usuario', component: RegistroUsuarioComponent },
]

@NgModule({
  imports: [RouterModule.forChild(constRutasHijas)],
  exports: [RouterModule],
})
export class RutaHijaModule { }
