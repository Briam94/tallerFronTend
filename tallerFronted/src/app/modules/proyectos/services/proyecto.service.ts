import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { ProyectosInterface } from '../../../models/proyectosInterface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

	proyectosCollection: AngularFirestoreCollection<ProyectosInterface>;
	proyectos: Observable<ProyectosInterface[]>;
	proyectosDoc: AngularFirestoreDocument<ProyectosInterface>;

  constructor(public afs: AngularFirestore) {
	  //this.proyectos = afs.collection('projects').valueChanges();
	  this.proyectosCollection = afs.collection<ProyectosInterface>('projects');
	  this.proyectos = this.proyectosCollection.snapshotChanges().pipe(
		  map(actions => actions.map(a => {
			  const data = a.payload.doc.data() as ProyectosInterface;
			  const id = a.payload.doc.id;
			  return { id, ...data };
		  }))
	  );
  }

	getProyectosNombre(nombre: string){
		let proyectos = this.getProyectos();
		let proyecto = proyectos.source.pipe(filter(item => item.nombre == nombre));
		return proyectos;
  }

  getProyectos(){
	  return this.proyectos;
  }

	addProyecto(proyecto: ProyectosInterface) {
		console.log('nuevo proyecto');
		this.proyectosCollection.add(proyecto);
	}

	deleteProyecto(proyecto: ProyectosInterface) {
		console.log('borrar proyecto');
		this.proyectosDoc = this.afs.doc(`projects/${proyecto.id}`);
		this.proyectosDoc.delete();
	}

	upDateProyecto(proyecto: ProyectosInterface) {
		console.log('actualizar proyecto');
		this.proyectosDoc = this.afs.doc(`projects/${proyecto.id}`);
		this.proyectosDoc.update(proyecto);
	}

}
