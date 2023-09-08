import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componentes Creados
import { DashboardComponent } from './paginas/dashboard/dashboard.component';
import { AplicacionesComponent } from './paginas/aplicaciones/aplicaciones.component';
import { PerfilComponent } from './paginas/perfil/perfil.component';
import { CredencialesComponent } from './paginas/credenciales/credenciales.component';
import { PaginaPrincipalComponent } from './paginas/pagina-principal/pagina-principal.component';
import { AuthGuard } from 'src/app/AuthGuard';

const rutas: Routes = [
  {
  path: 'home', 
  component: DashboardComponent,  
  loadChildren: () => import('./ruta-hija.module').then(m => m.RutaHijaModule),
  canActivate: [AuthGuard]
  },
  {
    path: 'pagina-principal', 
    component: PaginaPrincipalComponent,
    loadChildren: () => import('./ruta-hija.module').then(m => m.RutaHijaModule),
    canActivate: [AuthGuard]
    },
  {
    path: 'aplicaciones', 
    component: AplicacionesComponent,
    loadChildren: () => import('./ruta-hija.module').then(m => m.RutaHijaModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'perfil', 
    component: PerfilComponent,
    loadChildren: () => import('./ruta-hija.module').then(m => m.RutaHijaModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'credenciales', 
    component: CredencialesComponent,
    loadChildren: () => import('./ruta-hija.module').then(m => m.RutaHijaModule),
    canActivate: [AuthGuard]
  },
]

@NgModule({
  imports: [RouterModule.forChild(rutas)],
  exports: [RouterModule]
})
export class RuteoHomeModule { }
