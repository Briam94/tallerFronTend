import { Component, OnInit } from '@angular/core';

import { UsuarioInterface } from '../../../models/usuarioInterface';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

	usuarios: UsuarioInterface[];

	constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
	  this.usuarioService.getUsuarios().subscribe(usuarios => {
		  this.usuarios = usuarios;
		  console.log(usuarios);
	  })

  }

}
