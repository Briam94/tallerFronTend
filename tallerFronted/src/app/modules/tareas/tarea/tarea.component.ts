import { Component, OnInit } from '@angular/core';
import { TareaInterface } from '../../../models/tareasInterface';
import { TareaService } from '../services/tarea.service';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent implements OnInit {

	tareas: TareaInterface[];

	editState: boolean = false;
	tareaToEdit: TareaInterface;

  constructor(private tareaService: TareaService) { }

  ngOnInit() {
	  this.tareaService.getTareas().subscribe(tareas => {
		  this.tareas = tareas;
	  });
  }

	editTarea(event, tarea: TareaInterface){
		this.editState = true;
		this.tareaToEdit = tarea;
	}

	onUpdateTarea(tarea: TareaInterface){
		this.tareaService.updateTarea(tarea);
		this.clearState();
	}

	deleteTarea(event, tarea:TareaInterface){
		this.tareaService.deleteTarea(tarea);
		this.clearState();
	}

	clearState(){
		this.editState = false;
		this.tareaToEdit = null;
	}

}
