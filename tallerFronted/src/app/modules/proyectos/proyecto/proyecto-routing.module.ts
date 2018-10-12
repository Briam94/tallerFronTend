import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProyectoComponent } from './proyecto.component';

const routes: Routes = [
	{ path: '', redirectTo: 'proyecto', pathMatch: 'full' },
	{ path: 'proyecto', component: ProyectoComponent }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ProyectoRoutingModule { }