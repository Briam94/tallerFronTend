import { Routes, RouterModule } from '@angular/router';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { DashboardComponent } from './components/dashboard/dashboard.component';

const APP_ROUTES: Routes = [
	{ path: '', redirectTo: 'inicio', pathMatch: 'full' },
	{ path: 'inicio', component: DashboardComponent },
	{
		path: 'proyecto',
		loadChildren: './modules/proyectos/proyecto/proyecto.module#ProyectoModule'
	},
	{
		path: 'tarea',
		loadChildren: './modules/tareas/tarea/tarea.module#TareaModule'
	}
];

@NgModule({
	imports: [RouterModule.forRoot(APP_ROUTES)],
	exports: [RouterModule]
})
export class AppRoutingModule { }