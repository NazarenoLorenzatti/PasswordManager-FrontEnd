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
  imgPerfil!: any;  
  
  ngOnInit(): void {
   this.obtenerAdministrativo();
  }  

  constructor(media : MediaMatcher){
    this.pantallaCelu = media.matchMedia('(max-width: 600px)');    
  }

  obtenerAdministrativo(): void{
    let requestBody ={
      username: localStorage.getItem('user'),
    }
    this.administrativoService.buscarAdministrativoPorUsuario(requestBody).subscribe((data: any) => {      
      this.procesarResponse(data);
    }, (error: any) => {
      console.log("Error", error);
    })

  }

  procesarResponse(resp: any) { 
    if (resp.metadata[0].codigo == "00") {
      this.nombre = resp.administrativoResponse.administrativo[0].nombre;
      this.apellido = resp.administrativoResponse.administrativo[0].apellido;
      if(resp.administrativoResponse.administrativo[0].usuario.imgPerfil=== null){
        this.imgPerfil = null;
      } else {
        this.imgPerfil = 'data:image/jpeg;base64,' + resp.administrativoResponse.administrativo[0].usuario.imgPerfil;
      }
      
    }

  }
}
