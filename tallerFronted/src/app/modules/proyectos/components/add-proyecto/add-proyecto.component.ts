import { Component, OnInit } from '@angular/core';
import { ProyectoService } from '../../services/proyecto.service';
import { ProyectosInterface } from '../../../../models/proyectosInterface';
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'app-add-proyecto',
  templateUrl: './add-proyecto.component.html',
  styleUrls: ['./add-proyecto.component.css']
})
export class AddProyectoComponent implements OnInit {

	proyecto: ProyectosInterface = {

		nombre: '',
		descripcion: '',
		estado: '',
		fecha_entrega: '',
		fecha_inicio: '',
		responsable: '',
	};

  constructor(private proyectoService: ProyectoService) { }

  ngOnInit() {
  }

	onGuardarProyecto(myForm: NgForm){
		this.proyectoService.addProyecto(this.proyecto);
		myForm.reset();
		alert('Nuevo proyecto guardado exitosamente');
	}

}
