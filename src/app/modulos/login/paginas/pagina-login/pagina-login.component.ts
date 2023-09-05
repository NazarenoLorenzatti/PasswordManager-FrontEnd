import { Component } from '@angular/core';
import { UsuarioService } from 'src/app/modulos/template/servicios/usuario/usuario.service';

@Component({
  selector: 'app-pagina-login',
  templateUrl: './pagina-login.component.html',
  styleUrls: ['./pagina-login.component.css']
})
export class PaginaLoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: UsuarioService) {}

  onSubmit() {
    
  }
}
