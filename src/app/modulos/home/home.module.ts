import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateModule } from '../template/template.module';
import { DashboardComponent } from './paginas/dashboard/dashboard.component';
import { AplicacionesComponent } from './paginas/aplicaciones/aplicaciones.component';
import { PerfilComponent } from './paginas/perfil/perfil.component';
import { CredencialesComponent } from './paginas/credenciales/credenciales.component';
import { PaginaPrincipalComponent } from './paginas/pagina-principal/pagina-principal.component';
import { MaterialModule } from '../template/material.module';
import { NuevaAplicacionModalComponent } from './paginas/aplicaciones/nueva-aplicacion-modal/nueva-aplicacion-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditarAplicacionModalComponent } from './paginas/aplicaciones/editar-aplicacion-modal/editar-aplicacion-modal.component';
import { TablaComponent } from '../template/componentes/tabla/tabla.component';
import { EditarCredencialModalComponent } from './paginas/credenciales/editar-credencial-modal/editar-credencial-modal.component';
import { NuevaCredencialModalComponent } from './paginas/credenciales/nueva-credencial-modal/nueva-credencial-modal.component';



@NgModule({
  declarations: [
    NuevaAplicacionModalComponent,
    EditarAplicacionModalComponent,
    EditarCredencialModalComponent,
    NuevaCredencialModalComponent,
    DashboardComponent,   
    AplicacionesComponent,
    PerfilComponent,    
    CredencialesComponent,
    PaginaPrincipalComponent,    
  ],
  imports: [
    CommonModule,
    TemplateModule,
    MaterialModule,
    ReactiveFormsModule,

  ],
  providers: [
    TablaComponent
  ],
})
export class HomeModule { }
