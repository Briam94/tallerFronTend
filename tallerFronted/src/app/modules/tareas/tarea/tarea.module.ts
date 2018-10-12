import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TareaComponent } from './tarea.component';
import { AddTareaComponent } from '../components/add-tarea/add-tarea.component';


import { FormsModule } from '@angular/forms';
import { TareaRoutingModule } from './tarea-routing.module';

@NgModule({
  imports: [
    CommonModule,
	  TareaRoutingModule,
	  FormsModule
  ],
  declarations: [
  	TareaComponent,
	  AddTareaComponent
  	]
})
export class TareaModule { }
