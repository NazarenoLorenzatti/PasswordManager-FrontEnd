import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './componentes/sidenav/sidenav.component';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { CardComponent } from './componentes/card/card.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { TablaComponent } from './componentes/tabla/tabla.component';
import { MatTableModule } from '@angular/material/table';
import { ExpansionComponent } from './componentes/expansion/expansion.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { ContadoresComponent } from './componentes/contadores/contadores.component';
import { HttpClientModule } from '@angular/common/http';
import { CarouselComponent } from './componentes/carousel/carousel.component';
import { CarouselModule } from '@coreui/angular';


@NgModule({
  declarations: [
    SidenavComponent,
    CardComponent,
    TablaComponent,
    ExpansionComponent,
    ContadoresComponent,
    CarouselComponent,
  ],
  exports : [
    SidenavComponent, // Para que sea visible en otros modulos
    MatCardModule, 
    MatButtonModule,
    CardComponent,
    ExpansionComponent,
    TablaComponent,
    CarouselComponent,
    ContadoresComponent,
    CarouselModule
  ],
  imports: [
    RouterModule,
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    MatCardModule, 
    MatButtonModule,
    MatTableModule,
    MatExpansionModule,
    MatBadgeModule, 
    MatIconModule,
    HttpClientModule,
    CarouselModule
  ]
})
export class TemplateModule { }
