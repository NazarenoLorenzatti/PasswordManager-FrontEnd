import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Modulos creados por mi
import { LoginComponente } from './componente/login-componente.component';
import { RegistroUsuarioComponent } from './paginas/registro-usuario/registro-usuario.component';

const constRutasHijas: Routes = [
  { path: '', component: LoginComponente },
  { path: 'login', component: LoginComponente },
  { path: 'registrar-usuario', component: RegistroUsuarioComponent },
]

@NgModule({
  imports: [RouterModule.forChild(constRutasHijas)],
  exports: [RouterModule],
})
export class RutaHijaModule { }
