import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const base_url = "http://localhost:8080/api/v1/usuario"

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  actualizarUsuario(body: any){
    const headers = {
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    };
    const endpoint = `${base_url}/actualizar-usuario`;
    return this.http.put(endpoint, body, { headers });
  }

  subirFoto(formData: FormData){
    const headers = {
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    };
    const endpoint = `${base_url}/subir-foto-perfil`;
    return this.http.post(endpoint, formData, { headers });
  }
  
  eliminarUsuario(body: any){
    const headers = {
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    };
    const endpoint = `${base_url}/eliminar-usuario`;
    return this.http.post(endpoint, body, { headers });
  }

  guardarUsuario(body: any){    
    const endpoint = `${base_url}/crear-usuario`;
    return this.http.post(endpoint, body);
  }

  
}
