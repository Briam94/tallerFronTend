import { Routes, RouterModule } from '@angular/router';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';

const APP_ROUTES: Routes = [
	{ path: '', redirectTo: 'login', pathMatch: 'full' },
	{ path: 'login', component: LoginComponent },
	{ path: 'inicio', component: DashboardComponent },
	{
		path: 'proyecto',
		loadChildren: './modules/proyectos/proyecto/proyecto.module#ProyectoModule'
	},
	{
		path: 'tarea',
		loadChildren: './modules/tareas/tarea/tarea.module#TareaModule'
	},
	{
		path: 'usuario',
		loadChildren: './modules/usuarios/usuario/usuario.module#UsuarioModule'
	}
];

@NgModule({
	imports: [RouterModule.forRoot(APP_ROUTES)],
	exports: [RouterModule]
})
export class AppRoutingModule { }