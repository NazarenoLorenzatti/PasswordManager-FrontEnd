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
    const headers = {
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    };
    const endpoint = `${base_url}/listar-credenciales`;
    return this.http.get(endpoint, { headers });
  }

  buscarCredencialPorId(idCredencial: number){
    const headers = {
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    };
    const endpoint = `${base_url}/buscar-credencial-administrativo/${idCredencial}`;
    return this.http.get(endpoint, { headers });
  }

  buscarCredencialPorAdministrativo(idAdministrativo: number){
    const headers = {
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    };
    const endpoint = `${base_url}/buscar-credencial-administrativo/${idAdministrativo}`;
    return this.http.get(endpoint, { headers });
  }

  editarCredencial(body: any){
    const headers = {
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    };
    const endpoint = `${base_url}/editar-credencial`;
    return this.http.put(endpoint, body, { headers });
  }

  actualizarContraseña(body: any){
    const headers = {
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    };
    const endpoint = `${base_url}/actualizar-contraseña`;
    return this.http.put(endpoint, body, { headers });
  }

  guardarCredencial(body: any){
    const headers = {
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    };
    const endpoint = `${base_url}/guardar-credencial`;
    return this.http.post(endpoint, body, { headers });
  }

  eliminarCredencial(idCredencial: number){
    const headers = {
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    };
    const endpoint = `${base_url}/eliminar-credencial/${idCredencial}`;
    return this.http.delete(endpoint, { headers });
  }
}
