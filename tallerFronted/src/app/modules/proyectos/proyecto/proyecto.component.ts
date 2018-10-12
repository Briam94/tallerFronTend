import { Component, OnInit } from '@angular/core';

import { ProyectosInterface } from '../../../models/proyectosInterface';
import { ProyectoService } from '../services/proyecto.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {


	valueInput: string = '';

	proyectos: ProyectosInterface[];
	editState: boolean = false;
	proyectoToEdit: ProyectosInterface;

  constructor(private proyectoService: ProyectoService) { }

  ngOnInit() {
  	this.proyectoService.getProyectos().subscribe(proyectos => {
			console.log(proyectos);
			this.proyectos = proyectos;
  	})
  }

	editProyecto(event, proyecto: ProyectosInterface){
		this.editState = true;
		this.proyectoToEdit = proyecto;
	}

	onUpdateProyecto(proyecto: ProyectosInterface){
		this.proyectoService.upDateProyecto(proyecto);
		this.clearState();
		alert('Proyecto actualizado correctamente');
	}

	deleteProyecto(event, proyecto: ProyectosInterface){
		this.proyectoService.deleteProyecto(proyecto);
		this.clearState();
	}

	clearState(){
		this.editState = false;
		this.proyectoToEdit = null;
	}

}
