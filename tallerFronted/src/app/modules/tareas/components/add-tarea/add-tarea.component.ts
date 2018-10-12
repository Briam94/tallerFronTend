import { Component, OnInit } from '@angular/core';
import { ProyectosInterface } from '../../../../models/proyectosInterface';
import { ProyectoService } from '../../../proyectos/services/proyecto.service';

import { TareaService } from '../../services/tarea.service';
import { TareaInterface } from '../../../../models/tareasInterface';
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'app-add-tarea',
  templateUrl: './add-tarea.component.html',
  styleUrls: ['./add-tarea.component.css']
})
export class AddTareaComponent implements OnInit {

	editState: boolean = false;
	proyectoToEdit: ProyectosInterface;

	proyectos: ProyectosInterface[];

	tareaProyecto: TareaInterface = {
		nombre: ''
	};

	tarea: TareaInterface = {
		nombre: '',
		prioridad: '',
		proyecto: '',
		descripcion: ''
	};

	constructor(private proyectoService: ProyectoService, private tareaService: TareaService) { }

	ngOnInit() {
		this.proyectoService.getProyectos().subscribe(proyectos => {
			console.log(proyectos);
			this.proyectos = proyectos;
		})
  }

	onGuardarTarea(myForm: NgForm){
		this.tareaService.addTarea(this.tarea);
		myForm.reset();
	}

	editProyecto(event, proyecto: ProyectosInterface) {
		this.editState = true;
		this.proyectoToEdit = proyecto;
	}


	clearState() {
		this.editState = false;
		this.proyectoToEdit = null;
	}

}
