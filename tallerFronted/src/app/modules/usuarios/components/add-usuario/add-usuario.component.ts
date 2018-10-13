import { Component, OnInit } from '@angular/core';

import { UsuarioInterface } from '../../../../models/usuarioInterface';
import { UsuarioService } from '../../services/usuario.service';

import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'app-add-usuario',
  templateUrl: './add-usuario.component.html',
  styleUrls: ['./add-usuario.component.css']
})
export class AddUsuarioComponent implements OnInit {

	contrasena1: string = '';
	contrasena2: string = '';

	usuario: UsuarioInterface = {
		nombre: '',
		password: ''
	};


  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
  }

	onGuardarUsuario(myForm: NgForm){
		this.usuarioService.addUsuario(this.usuario);
		myForm.reset();
		alert('Nuevo proyecto guardado exitosamente');
	}

}
