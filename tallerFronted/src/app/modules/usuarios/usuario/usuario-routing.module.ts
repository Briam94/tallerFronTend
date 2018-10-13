import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioComponent } from './usuario.component';

const routes: Routes = [
	{ path: '', redirectTo: 'usuario', pathMatch: 'full' },
	{ path: 'usuario', component: UsuarioComponent }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class UsuarioRoutingModule { }