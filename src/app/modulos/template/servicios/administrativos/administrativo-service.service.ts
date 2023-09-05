import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const base_url = "http://localhost:8080/api/v1/administrativo"

@Injectable({
  providedIn: 'root'
})
export class AdministrativoService {

  constructor(private http: HttpClient) { }

  getAdministrativos(){
      const endpoint = `${base_url}/listar-administrativos`;
      return this.http.get(endpoint);
  }

  buscarAdministrativo(id: number){
    const endpoint = `${base_url}/buscar-administrativo/${id}`;
    return this.http.get(endpoint);
  } 

  editarAdministrativo(body: any){
    const endpoint = `${base_url}/editar-administrativos`;
    return this.http.put(endpoint, body);
  }

  crearAdministrativo(body: any){
    const endpoint = `${base_url}/crear-administrativos`;
    return this.http.post(endpoint, body);
  }

  eliminarAdministrativo(id:number){          
    const endpoint = `${base_url}/eliminar-administrativo/${id}`;
    return this.http.delete(endpoint);
  }
 
}
