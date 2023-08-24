import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './paginas/dashboard/dashboard.component';
import { AplicacionesComponent } from './paginas/aplicaciones/aplicaciones.component';
import { PerfilComponent } from './paginas/perfil/perfil.component';
import { CredencialesComponent } from './paginas/credenciales/credenciales.component';
import { PaginaPrincipalComponent } from './paginas/pagina-principal/pagina-principal.component';

// Modulos creados por mi

const constRutasHijas: Routes = [
  { path: 'home', component: DashboardComponent },
  { path: 'pagina-principal', component: PaginaPrincipalComponent },
  { path: 'aplicaciones', component: AplicacionesComponent },  
  { path: 'perfil', component: PerfilComponent }, 
  { path: 'credenciales', component: CredencialesComponent }, 
]

@NgModule({
  imports: [RouterModule.forChild(constRutasHijas)],
  exports: [RouterModule],
})
export class RutaHijaModule { }
