import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioComponent } from './usuario.component';

import { FormsModule } from '@angular/forms';

import { UsuarioRoutingModule } from './usuario-routing.module';

import { AddUsuarioComponent } from '../components/add-usuario/add-usuario.component';

@NgModule({
  imports: [
    CommonModule,
	  UsuarioRoutingModule,
	  FormsModule
  ],
  declarations: [
  	UsuarioComponent,
	  AddUsuarioComponent
  ]
})
export class UsuarioModule { }
