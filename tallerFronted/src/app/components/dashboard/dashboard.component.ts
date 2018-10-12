import { Component, OnInit } from '@angular/core';


import { ProyectosInterface } from '../../models/proyectosInterface';
import { ProyectoService } from '../../modules/proyectos/services/proyecto.service';

import { TareaInterface } from '../../models/tareasInterface';
import { TareaService } from '../../modules/tareas/services/tarea.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

	proyectos: ProyectosInterface[];

	tareas: TareaInterface[];

	constructor(private proyectoService: ProyectoService, 
		private tareaService: TareaService) { }

  ngOnInit() {
	  this.proyectoService.getProyectos().subscribe(proyectos => {
		  console.log(proyectos);
		  this.proyectos = proyectos;
	  })

	  this.tareaService.getTareas().subscribe(tareas => {
		  this.tareas = tareas;
	  });
  }

}
