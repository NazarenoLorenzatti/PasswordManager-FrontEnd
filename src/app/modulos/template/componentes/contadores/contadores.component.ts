import {Component, OnInit, inject} from '@angular/core';
import { CredencialService } from '../../servicios/credenciales/credencial-service.service';

@Component({
  selector: 'contadores-selector',
  templateUrl: 'contadores.component.html',
  styleUrls: ['contadores.component.css'],
})
export class ContadoresComponent implements OnInit {

  private credencialService = inject(CredencialService);
  hidden = false;
  credTotales: number = 0;
  credVigentes: number = 0;
  credVencidas: number = 0;

  listaDeCredenciales: any[] = [];

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

  ngOnInit(): void {
    this.obtenerCredencialPorAdministrativo(1);
   }


  obtenerCredencialPorAdministrativo(idAdministrativo: number): void {
    this.credencialService.buscarCredencialPorAdministrativo(idAdministrativo).subscribe((data: any) => {
      this.procesarResponseCredencial(data);
    }, (error: any) => {
      console.log("Error", error);
    })
  }

  procesarResponseCredencial(resp: any) { 
    if (resp.metadata[0].codigo == "00") {
      this.listaDeCredenciales = resp.credencialResponse.credencial;
      this.credTotales = this.listaDeCredenciales.length;
      this.listaDeCredenciales.forEach(c => {
        if(c.estadoCredencial.nombreCredencial === "VIGENTE"){
          this.credVigentes ++;
        } else {
          this.credVencidas ++;
        }
      });
    }
  }
}