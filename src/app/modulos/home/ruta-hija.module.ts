import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './paginas/dashboard/dashboard.component';
import { AplicacionesComponent } from './paginas/aplicaciones/aplicaciones.component';
import { PerfilComponent } from './paginas/perfil/perfil.component';
import { CredencialesComponent } from './paginas/credenciales/credenciales.component';
import { PaginaPrincipalComponent } from './paginas/pagina-principal/pagina-principal.component';
import { AuthGuard } from 'src/app/AuthGuard';

// Modulos creados por mi

const constRutasHijas: Routes = [
  { path: 'home', component: DashboardComponent, canActivate: [AuthGuard]},
  { path: 'pagina-principal', component: PaginaPrincipalComponent, canActivate: [AuthGuard]},
  { path: 'aplicaciones', component: AplicacionesComponent, canActivate: [AuthGuard] },  
  { path: 'perfil', component: PerfilComponent, canActivate: [AuthGuard]}, 
  { path: 'credenciales', component: CredencialesComponent, canActivate: [AuthGuard] }, 
]

@NgModule({
  imports: [RouterModule.forChild(constRutasHijas)],
  exports: [RouterModule],
})
export class RutaHijaModule { }
