import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


const base_url = "http://localhost:8080/api/v1/credencial"

@Injectable({
  providedIn: 'root'
})
export class CredencialService {

  constructor(private http: HttpClient) { }

  getCredenciales(){
    const endpoint = `${base_url}/listar-credenciales`;
    return this.http.get(endpoint);
  }

  buscarCredencialPorAdministrativo(idAdministrativo: number){
    const endpoint = `${base_url}/buscar-credencial-administrativo/${idAdministrativo}`;
    return this.http.get(endpoint);
  }

}
