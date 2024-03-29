import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const base_url = "http://localhost:8080/api/v1/administrativo"

@Injectable({
  providedIn: 'root'
})
export class AdministrativoService {

  constructor(private http: HttpClient) { }

  getAdministrativos(){
    const headers = {
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    };
      const endpoint = `${base_url}/listar-administrativos`;
      return this.http.get(endpoint, { headers });
  }

  buscarAdministrativo(id: number){
    const headers = {
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    };
    const endpoint = `${base_url}/buscar-administrativo/${id}`;
    return this.http.get(endpoint, { headers });
  } 

  buscarAdministrativoPorUsuario(body: any){
    const headers = {
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    };
    const endpoint = `${base_url}/buscar-administrativo-usuario`;
    return this.http.post(endpoint, body , { headers });
  } 

  editarAdministrativo(body: any){
    const headers = {
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    };
    const endpoint = `${base_url}/editar-administrativos`;
    return this.http.put(endpoint, body, { headers });
  }

  crearAdministrativo(body: any){
    const headers = {
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    };
    const endpoint = `${base_url}/crear-administrativo`;
    return this.http.post(endpoint, body, { headers });
  }

  eliminarAdministrativo(id:number){
    const headers = {
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    };          
    const endpoint = `${base_url}/eliminar-administrativo/${id}`;
    return this.http.delete(endpoint, { headers });
  }
 
}
