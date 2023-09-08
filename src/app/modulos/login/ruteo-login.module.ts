import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// Componentes Creados
import { PaginaLoginComponent } from './paginas/pagina-login/pagina-login.component';
import { RegistroUsuarioComponent } from './paginas/registro-usuario/registro-usuario.component';
import { AutenticacionComponent } from './paginas/segundo-factor/autenticacion/autenticacion.component';

const rutas: Routes = [
  {
  path: 'login', 
  component: PaginaLoginComponent,
  loadChildren: () => import('./ruta-hija.module').then(m => m.RutaHijaModule)
  },
  {
    path: 'registrar-usuario', 
    component: RegistroUsuarioComponent,
    loadChildren: () => import('./ruta-hija.module').then(m => m.RutaHijaModule)
    },
    {
      path: 'autenticacion', 
      component: AutenticacionComponent ,
      loadChildren: () => import('./ruta-hija.module').then(m => m.RutaHijaModule)
      },
]

@NgModule({
  imports: [RouterModule.forChild(rutas)],
  exports: [RouterModule]
})
export class RuteoLoginModule { }
