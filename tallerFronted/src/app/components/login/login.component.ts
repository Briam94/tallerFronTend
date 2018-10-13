import { Component, OnInit } from '@angular/core';

import { UsuarioInterface } from '../../models/usuarioInterface';
import { UsuarioService } from '../../modules/usuarios/services/usuario.service';


import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	nombres: string = '';
	passwords: string = '';

	usuarios: UsuarioInterface[];

	constructor(private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit() {
	  this.usuarioService.getUsuarios().subscribe(usuarios => {
		  this.usuarios = usuarios;
		  console.log(usuarios);
	  })
  }

	ingresar(event, usuario: UsuarioInterface) {
		if (usuario.nombre == this.nombres && usuario.password == this.passwords) {
			this.router.navigate(['/inicio']);
		}
		else {
			alert('usuario o contraseña incorrecto');
		}
	}

}
