import { Component, OnInit } from '@angular/core';


import { ProyectosInterface } from '../../models/proyectosInterface';
import { ProyectoService } from '../../modules/proyectos/services/proyecto.service';

import { TareaInterface } from '../../models/tareasInterface';
import { TareaService } from '../../modules/tareas/services/tarea.service';


import { formatDate } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

	valueInput:string = '';

	proyectos: ProyectosInterface[];

	tareas: TareaInterface[];

	estado1: string = "Terminado";
	estado2: string = "En progreso";

	fecha = Date.now();
	fechaR:string = "";

	editState: boolean = false;
	vistaToEdit: ProyectosInterface;

	constructor(private proyectoService: ProyectoService, 
		private tareaService: TareaService) {
		this.fechaR = formatDate(this.fecha, 'yyyyMMdd', 'en-US');
		}

  ngOnInit() {
	  this.proyectoService.getProyectos().subscribe(proyectos => {
		  console.log(proyectos);
		  this.proyectos = proyectos;
	  })

	  this.tareaService.getTareas().subscribe(tareas => {
		  this.tareas = tareas;
	  });
	  console.log(this.fechaR);
  }

	editVista(event, proyecto:ProyectosInterface){
		this.editState = true;
		this.vistaToEdit = proyecto;
	}

	clearState(){
		this.editState = false;
		this.vistaToEdit = null;
		console.log('clearState dashboard')
	}

}
