import { MediaMatcher } from '@angular/cdk/layout';
import { Component, HostListener, OnInit, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdministrativoService } from 'src/app/modulos/template/servicios/administrativos/administrativo-service.service';
import { CredencialService } from 'src/app/modulos/template/servicios/credenciales/credencial-service.service';


@Component({
  selector: 'app-credenciales',
  templateUrl: './credenciales.component.html',
  styleUrls: ['./credenciales.component.css']
})
export class CredencialesComponent implements OnInit {

  private credencialService = inject(CredencialService);
  private administrativoService = inject(AdministrativoService);
  pantallaCelu: MediaQueryList;
  listaDeCredenciales: any[] = []; 
  anchoPantalla: number;
  public dialog = inject(MatDialog);
  public aviso = inject(MatSnackBar); // Para mostrar avisos dinamicos
  constructor(media: MediaMatcher) {
    this.anchoPantalla = window.innerWidth; // Obtener el ancho inicial de la ventana
    this.pantallaCelu = media.matchMedia('(max-width: 800px)');
  }

  // PARA QUE SE ACTUALICE CUANDO SE VUELVA A AGRANDAR LA PANTALLA
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.anchoPantalla = event.target.innerWidth;
  }

  ngOnInit(): void {
    let requestBody ={
      username: localStorage.getItem('user'),
    }
    this.administrativoService.buscarAdministrativoPorUsuario(requestBody).subscribe((data: any) => {
      if(data.metadata[0].codigo == "00"){
        this.obtenerCredencialPorAdministrativo(data.administrativoResponse.administrativo[0].idAdministrativo);
      }
    }, (error: any) => {
      console.log("Error", error);
    });    
  }

  obtenerCredencialPorAdministrativo(idAdministrativo: number): void {
    this.credencialService.buscarCredencialPorAdministrativo(idAdministrativo).subscribe((data: any) => {
      console.log(data);
      this.procesarResponse(data);
    }, (error: any) => {
      console.log("Error", error);
    })
  }

  procesarResponse(resp: any) {
    if (resp.metadata[0].codigo == "00") {
      this.listaDeCredenciales = resp.credencialResponse.credencial;
    }

  }

}
