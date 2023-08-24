import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateModule } from '../template/template.module';
import { DashboardComponent } from './paginas/dashboard/dashboard.component';
import { AplicacionesComponent } from './paginas/aplicaciones/aplicaciones.component';
import { PerfilComponent } from './paginas/perfil/perfil.component';
import { CredencialesComponent } from './paginas/credenciales/credenciales.component';
import { PaginaPrincipalComponent } from './paginas/pagina-principal/pagina-principal.component';
import { MaterialModule } from '../template/material.module';



@NgModule({
  declarations: [
    DashboardComponent,   
    AplicacionesComponent,
    PerfilComponent,    
    CredencialesComponent,
    PaginaPrincipalComponent
  ],
  imports: [
    CommonModule,
    TemplateModule,
    MaterialModule
  ]
})
export class HomeModule { }
