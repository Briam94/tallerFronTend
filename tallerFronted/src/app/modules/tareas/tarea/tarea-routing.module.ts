import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TareaComponent } from './tarea.component';

const routes: Routes = [
	{ path: '', redirectTo: 'tarea', pathMatch: 'full' },
	{ path: 'tarea', component: TareaComponent }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class TareaRoutingModule { }