import { MediaMatcher } from '@angular/cdk/layout';
import { Component, OnInit, inject } from '@angular/core';
import { AdministrativoService } from 'src/app/modulos/template/servicios/administrativos/administrativo-service.service';


@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.css']
})
export class PaginaPrincipalComponent implements OnInit {
  private administrativoService = inject(AdministrativoService);
  pantallaCelu: MediaQueryList;
  nombre: string = '';
  apellido: string = '';
  

  ngOnInit(): void {
    this.obtenerAdministrativo(1);
  }  

  constructor(media : MediaMatcher){
    this.pantallaCelu = media.matchMedia('(max-width: 600px)');    
  }

  obtenerAdministrativo(idAdministrativo: number): void{
    this.administrativoService.buscarAdministrativo(idAdministrativo).subscribe((data: any) => {      
      this.procesarResponse(data);
      console.log("ADMINISTRATIVO", data);
    }, (error: any) => {
      console.log("Error", error);
    })

  }

  procesarResponse(resp: any) { 
    if (resp.metadata[0].codigo == "00") {
      this.nombre = resp.administrativoResponse.administrativo[0].nombre;
      this.apellido = resp.administrativoResponse.administrativo[0].apellido;
      console.log("NOMBRE DEL ADM", );
    }

  }
}
