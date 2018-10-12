import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProyectoComponent } from './proyecto.component';
import { AddProyectoComponent } from '../components/add-proyecto/add-proyecto.component';

import { FormsModule } from '@angular/forms';

import { ProyectoRoutingModule } from './proyecto-routing.module';

@NgModule({
  imports: [
	  CommonModule,
	  ProyectoRoutingModule,
	  FormsModule
  ],
  declarations: [
  	ProyectoComponent,
	AddProyectoComponent]
})
export class ProyectoModule { }
