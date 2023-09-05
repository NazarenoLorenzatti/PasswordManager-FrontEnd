import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


const base_url = "http://localhost:8080/api/v1/credencial"

@Injectable({
  providedIn: 'root'
})
export class CredencialService {

  credencial: any; 

  constructor(private http: HttpClient) { }

  getCredenciales(){
    const endpoint = `${base_url}/listar-credenciales`;
    return this.http.get(endpoint);
  }

  buscarCredencialPorId(idCredencial: number){
    const endpoint = `${base_url}/buscar-credencial-administrativo/${idCredencial}`;
    return this.http.get(endpoint);
  }

  buscarCredencialPorAdministrativo(idAdministrativo: number){
    const endpoint = `${base_url}/buscar-credencial-administrativo/${idAdministrativo}`;
    return this.http.get(endpoint);
  }

  editarCredencial(body: any){
    const endpoint = `${base_url}/editar-credencial`;
    return this.http.put(endpoint, body);
  }

  actualizarContraseña(body: any){
    const endpoint = `${base_url}/actualizar-contraseña`;
    return this.http.put(endpoint, body);
  }

  guardarCredencial(body: any){
    const endpoint = `${base_url}/guardar-credencial`;
    return this.http.post(endpoint, body);
  }

  eliminarCredencial(idCredencial: number){
    const endpoint = `${base_url}/eliminar-credencial/${idCredencial}`;
    return this.http.delete(endpoint);
  }
}
